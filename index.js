"use strict";
const fs = require('fs');
const schedule = require('node-schedule');
const fileControler = require('./controlers/fileControler');
const poster = require('./controlers/posterControler');

const interval = 10; //seconds interval of posting logs

const rule = new schedule.RecurrenceRule();
rule.second = interval;
const fileTask = schedule.scheduleJob(rule, function() {
  poster.postLog();
});
