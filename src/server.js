'use strict';

const Hapi = require('hapi');
const UserRoutes = require('./resources/user/userRoute');

const Good = require('./plugins/good');
const Swagger = require('./plugins/swagger');
const SwaggerUi = require('./plugins/swagger-ui');

const server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: 8000
});

const Plugins = [
    Good,
    require('inert'),
    require('vision'),
    Swagger,
    SwaggerUi
];

server.register(Plugins, (err) => {

    if (err) {
        console.log(err);
    }
});

server.route(UserRoutes);

const start = () => {

    server.start(() => {

        server.log('info', 'server running at: ' + server.info.uri + ' using environment: ' + process.env.NODE_ENV);
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
