const https = require('https');
const http = require('http');
const url = require('url');

http.createServer( (request, response) => {

  let requestParams = url.parse(request.url, true);

  if (!requestParams.query.q) {
    response.end();
    return;
  }

  https.get('https://www.google.com/complete/search?client=firefox&q=' + requestParams.query.q, (result) => {

    result.on('data', (d) => {

      let suggestions = JSON.parse(d.toString());

      response.setHeader('Content-Type', 'application/json; charset=UTF-8');
      response.setHeader('Access-Control-Allow-Origin', '*');

      response.writeHead(200, "OK");
      response.write(JSON.stringify(suggestions[1]));
      response.end();
    });

  }).on('error', (e) => {
    process.stdout.write(e);
  });

}).listen(5454);