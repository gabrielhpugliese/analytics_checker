Package.describe({
  summary: "Bitpay nodejs client wrapped for Meteor"
});

Npm.depends({"slimerjs" : "0.9.1-2"});

Package.on_use(function (api) {
  var both = ['client', 'server'];

  api.add_files([
    'server/event_emmiter.js',
    'server/utils.js'
  ], 'server');

  if (typeof api.export !== 'undefined') {
    api.export(['runSlimer'], 'server');
    api.export(['slimerToJSON'], 'server');
  }
});
