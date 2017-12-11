'use strict';

module.exports = function(server) {
  // Install a `/` route that returns server status
  var router = server.loopback.Router();
  router.get('/', server.loopback.status());
  //router.get('/');//in order for use meetups in the loopback server
  server.use(router);
};
