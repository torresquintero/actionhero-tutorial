'use strict'

module.exports = {
  loadPriority: 1000,
  startPriority: 1000,
  stopPriority: 1000,
  initialize: function (api, next) {
    api.users = { //user methods
      // constants
      usersHash: "users",
      // methods
      add: function(userName, password, next){},
      list: function(next){},
      authenticate: function(userName, password, next){},
      delete: function(userName, password, next){},
    }

    return next()
  },
  start: function (api, next) {
    return next()
  },
  stop: function (api, next) {
    return next()
  }
}
