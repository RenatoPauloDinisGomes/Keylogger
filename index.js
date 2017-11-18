"use strict";
const fs = require('fs');
const schedule = require('node-schedule');
const fileControler = require('./controlers/fileControler');
const configs = require('./configs.json');


const rule = new schedule.RecurrenceRule();
rule.second = 10;
const fileTask = schedule.scheduleJob(rule, function() {
  fileControler.add(configs.filename, "key");
});

const rule2 = new schedule.RecurrenceRule();
rule2.second = 20;
const fileTask2 = schedule.scheduleJob(rule2, function() {
  fileControler.delete(configs.filename);
});

const rule3 = new schedule.RecurrenceRule();
rule3.second = 15;
const fileTask3 = schedule.scheduleJob(rule3, function() {
  fileControler.read(configs.filename);
});
