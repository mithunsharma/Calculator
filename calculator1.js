var http = require("http");
const url = require('url');
var cal=require('./Calculatorfun')

http.createServer(function (request, response) {

   response.writeHead(200, {'Content-Type': 'text/plain'});
   var urlObject= url.parse(request.url,true)
   var equa=urlObject.pathname.toString();
   var arr=equa.split('/');
   if(arr[1]=='sum')
   {
     response.end("Addition        :  "+cal.sum(parseInt(arr[2]),parseInt(arr[3])));
   }
   else if (arr[1]=='sub')
   {
     response.end("Substraction    :  "+cal.sub(parseInt(arr[2]),parseInt(arr[3])));
   }
   else if (arr[1]=='mult')
   {
     response.end("Multiplication  :  "+cal.mult(parseInt(arr[2]),parseInt(arr[3])));
   }
   else if (arr[1]=='division')
   {
    response.end("Division         :  "+cal.division(parseInt(arr[2]),parseInt(arr[3])));
   }
   else
   {
     response.end("Not Calculation");
   }


}).listen(8080);
