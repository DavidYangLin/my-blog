'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_URL:'"http://localhost:8240/api/services/app/"',
  fileUrl:'"http://localhost:8240/api/"',
  backFileDist:'"http://localhost:8240"'
})
