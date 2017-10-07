'use strict';

module.exports = {
    register: require('hapi-swaggered-ui'),
    options: {
        title: 'Hapi Documentation',
        path: '/docs',
        swaggerOptions: {
            validatorUrl: null
        }
    }
};
