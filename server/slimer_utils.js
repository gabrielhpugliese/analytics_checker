slimerToJSON = function (slimerOutput) {
  slimerOutput = slimerOutput.replace(/Requested \(#\d+\): /, '');

  console.log(slimerOutput);
  return JSON.parse(slimerOutput);
};

var xx = slimerToJSON('Requested (#31): {"id":31,"method":"GET","url":"http://www.google-analytics.com/__utm.gif?utmwv=5.5.4&utms=1&utmn=1359805200&utmhn=www.google.com&utmcs=UTF-8&utmsr=1920x1080&utmvp=400x300&utmsc=24-bit&utmul=en-us&utmje=1&utmfl=11.2%20r202&utmdt=Google%20Analytics%20Official%20Website%20%E2%80%93%20Web%20Analytics%20%26%20Reporting&utmhid=2137761381&utmr=-&utmp=%2Fanalytics%2F&utmht=1408842993566&utmac=UA-10005-1&utmcc=__utma%3D173272373.288319979.1408842994.1408842994.1408842994.1%3B%2B__utmz%3D173272373.1408842994.1.1.utmcsr%3D(direct)%7Cutmccn%3D(direct)%7Cutmcmd%3D(none)%3B&utmu=qKC~","time":"2014-08-24T01:16:33.567Z","headers":[{"name":"Host","value":"www.google-analytics.com"},{"name":"User-Agent","value":"Mozilla/5.0 (X11; Linux x86_64; rv:25.0) Gecko/20100101 SlimerJS/0.9.1"},{"name":"Accept","value":"image/png,image/*;q=0.8,*/*;q=0.5"},{"name":"Accept-Language","value":"en-US,en;q=0.5"},{"name":"Accept-Encoding","value":"gzip, deflate"},{"name":"Referer","value":"http://www.google.com/analytics/"}]}');
console.log(xx);
