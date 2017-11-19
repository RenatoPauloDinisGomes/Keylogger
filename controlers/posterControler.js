"use strict";
const request = require('request');
const fileControler = require("./fileControler");
const configs = require('../configs.json');

module.exports = {
  postLog: function() {
    let body = {
      token: "token",
      logs: fileControler.read(configs.logsPath),
      host: "192.168.1.45"
    };

    request.post({
      url: configs.endpoint,
      json: body
    }, function optionalCallback(err, httpResponse, body) {
      if (err) {
        return console.error('post failed:', err);
      }
      if (body.success) {
        // fileControler.delete(configs.logsPath);
      }
    });
  }
}
