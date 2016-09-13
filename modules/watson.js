let someText = require('./someText.js');
var watson = require('watson-developer-cloud');
var alchemy_language = watson.alchemy_language({
  api_key: "API HERE",
});

let text = someText.get();
let aggregateText = '';

for (let i=0; i<text.length; ++i) {
  aggregateText += text[i]+', ';
}

var parameters = {
  extract: 'concepts, taxonomy, keywords, relations, doc-sentiment',
  text: aggregateText,
};

let alch_res = null;

alchemy_language.combined(parameters, function (err, response) {
  if (err)
    console.log('error:', err);
  else{
    // console.log(JSON.stringify(response, null, 2));
    alch_res = response;
  }
});

module.exports = {
  alchemy() {

      // console.log(JSON.stringify(alch_res, null, 2));

    return alch_res;
  }
};
