'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_HOST: '"http://localhost:8080"',
  API_PREFIX: '"http://localhost:8080/static/dummy"'
})
