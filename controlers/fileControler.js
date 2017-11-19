"use strict";
const fs = require('fs');

module.exports = {
  add: function(name, key) {
    fs.appendFile(`${__dirname}/${name}`, key + "\n", (err) => {
      if (err) throw err;
    });
  },
  delete: function(name) {
    fs.unlink(`${__dirname}/${name}`, (err) => {
      if (err) throw err;
    });
  },
  read: function(name) {
    fs.readFile(`${__dirname}/${name}`, 'utf8', (err, data) => {
      if (err) throw err;
      console.log(data);
      return data;
    });
  }
}
