const dotenv = require('dotenv').config();

export const envVariables = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    HOST: process.env.HOST,
    PORT: process.env.PORT || 3000,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_NAME: process.env.DB_NAME,
    DB_HOST: process.env.DB_HOST,
    DB_PORT: +process.env.DB_PORT,
    DB_USERNAME: process.env.DB_USERNAME,
    DB_TYPE: process.env.DB_TYPE,
    HASH: 'J@chm-#$%',
    EXPIREIN: '1h',
    REJECT_MSG: 'No token generated',
    TOKE_ERR: 'No token provided',
    WRONG_USER: 'Wrong user'
}

Object.freeze(envVariables);