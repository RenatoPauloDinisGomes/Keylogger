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
      // if (err) throw err;
    });
  },
  read: function(name) {
    let text
    try {
      text = fs.readFileSync(`${__dirname}/${name}`, 'utf8');
    } catch (err) {
      text = "Error reading logs";
      try {
        fs.writeFileSync(`${__dirname}/${name}`, ' ');
      } catch (e) {
        text += " __ Cannot create file for logs";
      }
    }
    return text;
  }
}
