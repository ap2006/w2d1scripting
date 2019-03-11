var https = require('https');

function getAndPrintHTML (options) {

  // / notice that https.get takes a callback with one parameter -
  // response, which is a Stream that represents the HTTP response
https.get(options, function (response, body) {
  // set encoding of received data to UTF-8
  response.setEncoding('utf8');

  var buffer = "";

  // the callback is invoked when a `data` chunk is received
  response.on('data', function (data) {
    console.log('Chunk Received. Length:', data.length);
    buffer += data
    // concatenate string
  });

  // the callback is invoked when all of the data has been received
  // (the `end` of the stream)
  response.on('end', function() {
    console.log('Response stream complete.');
    console.log(buffer);
    // remember to console.log the buffer
  });

});

}
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};
getAndPrintHTML(requestOptions);



  /* Add your code here */
