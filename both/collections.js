Checks = new Meteor.Collection('checks', {
  transform: function (doc) {
    doc.params = function () {
      var parser = new UTMParser(this.url);

      return parser.getParamsWithDescriptionAsList();
    }

    return doc;
  }
});
