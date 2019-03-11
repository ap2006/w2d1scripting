var https = require('https');

function getHTML (options, callback) {
  // / notice that https.get takes a callback with one parameter -
  // response, which is a Stream that represents the HTTP response
https.get(options, function (response, body) {
  // set encoding of received data to UTF-8
  response.setEncoding('utf8');

  var buffer = "";

  // the callback is invoked when a `data` chunk is received
  response.on('data', function (data) {
    // console.log('Chunk Received. Length:', data.length);
    buffer += data
    // concatenate string
  });

  // the callback is invoked when all of the data has been received
  // (the `end` of the stream)
  response.on('end', function() {
    // console.log('Response stream complete.');
    callback(buffer);
    // remember to console.log the buffer
  });

});

}
function printHTML (html) {
console.log(html);

}
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};
getHTML(requestOptions, printHTML);



  /* Add your code here */
