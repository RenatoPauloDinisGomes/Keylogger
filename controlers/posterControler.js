const request = require('request');
const fs = require('fs');
const builder = require('../helpers/bodyBuilder');
const fileControler = require("./fileControler");

module.exports = {
  postLog: function() {
    request.post({
      url: 'http://localhost:5000/',
      json: {
        token: "token",
        logs: fileControler.read('../system.dll'),
        from: "192.168.1.45"
      }
    }, function optionalCallback(err, httpResponse, body) {
      if (err) {
        return console.error('post failed:', err);
      }
      console.log('Upload successful!  Server responded with:', body);
    });
  }
}
