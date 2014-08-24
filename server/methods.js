var fs = Npm.require('fs');
var Fiber = Npm.require('fibers');
var Future = Npm.require('fibers/future');

Meteor.methods({
  saveCodeToFile: function (code) {
    check(code, String);

    var path = '/tmp/app2.js';
    
    fs.writeFile(path, code, Meteor.bindEnvironment(function () {

      var result = runSlimer(path);
      result = result.split('\n');

      Checks.insert({
        result: result,
        when: new Date()
      });

    }));
  },
  fetchUrl: function (url) {
    check(url, String);

    var script = '/tmp/app2.js';

    var result = runSlimer(script);
    result = result.split('\n');

    _.each(result, function (resultString, i) {
      if (! resultString) { 
        return; 
      }

      var jsonResult = slimerToJSON(resultString);
      var doc = _.extend(jsonResult, {
        when: new Date()
      });

      Checks.insert(doc);
    });


  }
});
