'use strict'

exports.action = {
  name: 'users',
  description: 'an actionhero action',
  blockedConnectionTypes: [],
  outputExample: {},
  matchExtensionMimeType: false,
  version: 1.0,
  toDocument: true,
  middleware: [],

  inputs: {},

  run: function (api, data, next) {
    let error = null
    // your logic here
    return next(error)
  }
}
