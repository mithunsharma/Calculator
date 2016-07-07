var http = require("http");

http.createServer(function (request, response) {

response.writeHead(200, {'Content-Type': 'text/plain'});
 var a=require('./Calculatorfun');

 response.end('\nSum = '+a.sum(10,2)+'\nMinus= '+a.sub(10,2)+'\nMultiplication= '+a.mult(10,2)+'\nDivision = '+a.division(10,2));
}).listen(8080);
