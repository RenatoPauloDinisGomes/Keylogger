"use strict";
const configs = require('./configs.json');
const fs = require('fs');
const schedule = require('node-schedule');
const fileControler = require('./controlers/fileControler');

const rule = new schedule.RecurrenceRule();
rule.second = 10;


const fileTask = schedule.scheduleJob(rule, function() {
  fileControler.add(configs.filename, "key");
});
