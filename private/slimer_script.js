(function () {
  var page = require("webpage").create();

  var url = phantom.args[0];

  page.onResourceRequested = function (requestData, networkRequest) {
    if (/utm\.gif/g.test(requestData.url)) {
      console.log(JSON.stringify(requestData));
    }
  };

  page.open(url)
  .then(function (status) {
    if (status !== "success") {
      console.log("Sorry, the page is not loaded");
    }
    page.close();
    phantom.exit();
  });

}());
