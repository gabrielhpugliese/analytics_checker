slimerToJSON = function (slimerOutput) {
  slimerOutput = slimerOutput.replace(/Requested \(#\d+\): /, '');

  return JSON.parse(slimerOutput);
};

