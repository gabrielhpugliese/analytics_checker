var slimerjs = Npm.require("slimerjs");
var execFile = Npm.require('child_process').execFile;
var path = Npm.require('path');
var Future = Npm.require('fibers/future');

var syncExecFile = Meteor._wrapAsync(execFile);
var slimerBin = slimerjs.path;


runSlimer = function (scriptPath, url) {
  var future = new Future();
  
  execFile('xvfb-run', [slimerBin, scriptPath, url], function(err, stdout, stderr) {
    future.return(stdout);
  });
  
  var result = future.wait();
  
  return result;
};
