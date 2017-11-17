"use strict";
const fs = require('fs');
const configs = require('../configs.json');

module.exports = {
  add: function(key) {
    fs.appendFile(`${__dirname}/${configs.filename}`, key + "\n", function(err) {
      if (err) throw err;
    });
  },
  delete: function(filename) {
    fs.unlink(`${__dirname}/${configs.filename}`, (err) => {
      if (err) throw err;
    });
  }
}
