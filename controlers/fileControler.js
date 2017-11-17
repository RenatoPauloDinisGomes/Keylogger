"use strict";
const fs = require('fs');
module.exports = {
  add: function(filename, key) {
    fs.appendFile(`${__dirname}/${filename}`, key+"\n", function(err) {
      if (err) return console.log(err);
    });
  }
}
