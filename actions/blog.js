'use strict'

exports.action = {
  name: 'blog',
  description: 'an actionhero action',
  blockedConnectionTypes: [],
  outputExample: {},
  matchExtensionMimeType: false,
  version: 1.0,
  toDocument: true,
  middleware: [],
  authenticated: true,

  inputs: {},

  run: function (api, data, next) {
    let error = null
    // your logic here
    return next(error)
  }
}
