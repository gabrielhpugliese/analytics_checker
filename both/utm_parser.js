UTMParser = function (rawParams) {
  if (! rawParams) {
    throw new Error('No raw params was supplied as first param.');
  }

  if (rawParams.indexOf('?') !== -1) {
    rawParams = rawParams.split('?')[1];
  }

  this.rawParams = rawParams;
  this.parsedParams = this._parseParams(rawParams);
  this.utmDict = {
    "utmac": "Account ID",
    "utmcc": "Analytics Cookie string",
    "utmcn": "New campaign visit?",
    "utmcr": "Repeat campaign visit?",
    "utmdt": "Page title",
    "utmhn": "Hostname",
    "utmp": "Page path",
    "utmr": "Full referral URL",
    "utmcs": "Character set",
    "utmfl": "Flash version",
    "utmip": "IP address",
    "utmje": "Java enabled?",
    "utmsc": "Screen colour depth",
    "utmsr": "Screen resolution",
    "utmul": "Language code",
    "utmvp": "Viewport resolution",
    "utme": "Extensible parameter",
    "utmni": "Non-in­ter­action event",
    "utmtci": "Billing City",
    "utmtco": "Billing Country",
    "utmtrg": "Billing Region",
    "utmtid": "Order ID",
    "utmtst": "Affili­ation / Store name",
    "utmtsp": "Shipping cost",
    "utmtto": "Order Total (inc. tax and shipping)",
    "utmttx": "Tax cost",
    "utmipc": "Product code / SKU",
    "utmipn": "Product name",
    "utmipr": "Product price",
    "utmiqt": "Quantity",
    "utmiva": "Product category / variation",
    "utmsa": "Social action",
    "utmsid": "Social destination (optional)",
    "utmsn": "Social network name",
    "utmhid": "Hit ID, random number",
    "utmn": "Random ID to prevent gif caching",
    "utms": "Requests made this session",
    "utmt": "Request type",
    "utmu": "Client usage / Error data (encoded)",
    "utmvid": "Visitor ID",
    "utmwv": "Tracking code version",
    "guid": "Send Globally Unique Identifier",
    "utmcsr": "Campaign source",
    "utmccn": "Campaign name",
    "utmcmd": "Campaign medium",
    "utmctr": "Campaign term / key phrase",
    "utmcct": "Campaign content",
    "utmht": "Timestamp"
  };
};

UTMParser.prototype._parseParams = function (rawParams) {
  rawParams = rawParams || this.rawParams;

  if (! rawParams) {
    throw new Error('No raw params was supplied as param.');
  }

  var keyAndValue = rawParams.split('&');
  var length = keyAndValue.length;
  var paramsHash = {};
  var splitted;
  var i = 0;

  for (i = 0; i < length; i++) {
    splitted = keyAndValue[i].split('=');
    paramsHash[splitted[0]] = decodeURIComponent(splitted[1]);
  }

  return paramsHash;
};

UTMParser.prototype.setParam = function (key, value) {
  this.parsedParams[key] = value;
};

UTMParser.prototype.getDescription = function (key) {
  return this.utmDict[key];  
};

UTMParser.prototype.getParamsWithDescription = function () {
  var params = this.parsedParams;
  var paramsWithDescription = {};

  if (! params) {
    throw new Error('No parsed params found.');
  }

  for (key in params) {
    if (params.hasOwnProperty(key)) {
      paramsWithDescription[key] = {
        value: params[key],
        description: this.utmDict[key]
      };
    }
  }

  return paramsWithDescription;
};

UTMParser.prototype.getParamsWithDescriptionAsList = function () {
  var params = this.parsedParams;
  var paramsWithDescription = []; 

  if (! params) {
    throw new Error('No parsed params found.');
  }

  for (key in params) {
    if (params.hasOwnProperty(key)) {
      paramsWithDescription.push({
        key: key,
        value: params[key],
        description: this.utmDict[key]
      });
    }
  }

  return paramsWithDescription;
};
