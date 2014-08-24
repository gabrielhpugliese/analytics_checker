Template.checks.helpers({
  checks: function () {
    return Checks.find();
  }
});

Template.url.events({
  'click button': function (e, t) {
    var url = t.$('input').val();

    Meteor.call('fetchUrl', url, function (err, res) {
      console.log(err, res);
    });
  } 
});
