// in ./config/config.js
const fs = require('fs')
require('dotenv').config()

module.exports = {
  development: {
    // add the key/values pairs from your config.json here
    "username": "sequelize",
    "password": "sequelize",
    "database": "judgement_day",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  production: {
    use_env_variable: 'DATABASE_URI'
  }
}