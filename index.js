"use strict";
const fs = require('fs');
const schedule = require('node-schedule');
const fileControler = require('./controlers/fileControler');
const poster = require('./controlers/posterControler');


const rule = new schedule.RecurrenceRule();
rule.second = 10;
const fileTask = schedule.scheduleJob(rule, function() {
  poster.postLog();
});
