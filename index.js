"use strict";
const fs = require('fs');
const schedule = require('node-schedule');
const fileControler = require('./controlers/fileControler');

const rule = new schedule.RecurrenceRule();
rule.second = 10;


const fileTask = schedule.scheduleJob(rule, function() {
  fileControler.add("key");
});
const rule2 = new schedule.RecurrenceRule();
rule2.second = 20;

const fileTask2 = schedule.scheduleJob(rule2, function() {
  fileControler.delete();
});
