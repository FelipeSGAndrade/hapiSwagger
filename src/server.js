'use strict';

const _ = require('lodash');
const Plugins = require('./config/plugins');
const Config = require('./config/config');
const Hapi = require('hapi');
//const UserService = require('./user/service');
const Routes = require('./routes');

const server = new Hapi.Server();

server.connection({
    host: Config.server.host,
    port: Config.server.port,
    labels: ['api']
});

server.register(Plugins, (err) => {

    if (err) {
        console.log(err);
    }
});

server.auth.strategy('token', 'jwt', {
    key: Config.security.key,
    verifyOptions: {
        maxAge: Config.security.maxAge,
        algorithms: [
            Config.security.algorithm
        ]
    }
});

_.each(Routes.getRoutes(), (route) => {

    server.route(route);
});

const start = () => {

    server.start(() => {

        server.log('info', 'server running at: ' + server.info.uri + ' using environment: ' + Config.getEnvironment());
    });

};

const stop = (reason) => {

    server.log('info', 'server stopping: ' + reason);
    server.stop();
};


module.exports = {
    start: start,
    stop: stop,
    server: server
};
