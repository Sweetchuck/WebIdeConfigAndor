## kate: syntax Velocity;
#set($Subject = $NAME.replace('Test', ''))
#set($subjectFirst = $Subject.substring(0, 1).toLowerCase())
#set($subjectRest = $Subject.substring(1))
#set($subject = "$subjectFirst$subjectRest")
#set($name = "${subject}Test")
/**
 * @file
 * NodeUnit tests for tasks/lib/$Subject.
 */

/// <reference path="../../../../typings/tsd.d.ts" />

import nodeunit = require('nodeunit');
import grunt = require('grunt');
import $Subject = require('../../../tasks/lib/$Subject');

var $name: nodeunit.ITestGroup = {

  //'tearDown': function (callback: nodeunit.ICallbackFunction): void {
  //  // Do something.
  //
  //  callback();
  //},
  
  //'setUp': function (callback: nodeunit.ICallbackFunction): void {
  //  // Do something.
  //
  //  callback();
  //},

  test

};

module.exports = $name;
