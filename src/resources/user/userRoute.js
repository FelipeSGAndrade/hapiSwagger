'use strict'

const joi = require('joi');

const generateToken = {
    path: '/v1/user/token',
    method: 'POST',
    config: {
        tags: ['api', 'users'],
        description: 'Login por email e password',
        notes: 'Retorna um token de acesso para o usuário',
        handler: (request, reply) => {
            reply({
                token: 'string'
            })
        }
    }
};

const routes = [
    generateToken
];

module.exports = routes;
