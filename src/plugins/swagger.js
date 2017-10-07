'use strict';

module.exports = {
    register: require('hapi-swaggered'),
    options: {
        tags: [{
            'name': 'users',
            'description': 'Users data'
        },{
            'name': 'api',
            'description': 'API Endpoints'
        }],
        info: {
            title: 'Hapi Documentation',
            version: '1.0'
        },
        tagging: {
            mode: 'tags'
        }
    }
};
