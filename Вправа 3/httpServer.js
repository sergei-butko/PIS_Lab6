const http = require("http");

http.createServer(function(request, response){

    response.setHeader("Content-Type", "text/html; charset=utf-8;");

    if(request.url === "/home" || request.url === "/"){
        response.write("<h2>Hello. This is a new HTTP Server</h2>");
    }
    else if(request.url == "/is9303"){
        response.write("<h2>Сергій Бутко. 2 курс. ІС-93</h2>");
    }
    else{
        response.write("<h2>Not found</h2>");
    }
    response.end();
}).listen(3000);

//
//