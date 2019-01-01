let fetch = require('node-fetch');

exports.handler = function(event, context, callback) {
  // your server-side functionality
  fetch('');
  callback(null, {
    statusCode: 200,
    body: 'Hello',
  });
};
