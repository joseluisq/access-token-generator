var len = 40;

require('crypto').randomBytes(Math.ceil(len / 2), function(ex, buf) {
  var sha1 = require('sha1'),
      hex = buf.toString('hex').slice(0, len),
      token = sha1(hex);

  console.log('                  Access Token SHA1 Generator');
  console.log('----------------------------------------------------------------');
  console.log(' Len   : ' + hex.length);
  console.log(' Hex   : ' + hex);
  console.log(' Sha1  : ' + token);
  console.log(' Token : ?access_token=' + hex);
  console.log('----------------------------------------------------------------');
});
