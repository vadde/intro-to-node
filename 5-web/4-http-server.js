var http =  require("http");
var fs =  require("fs");

// http.createServer function which accepts a single function as an argument
// that function accepts both a request and a response
// its is invoked on each request
http.createServer(function (request, response){
    // write out the header
    response.writeHead(200, {"Content-Type" : "text/plain"});
    // Check the URL of the request
    if (request.url === "/file.txt"){
        //open a readable stream of that file and pipe it to the response
        fs.createReadStream(__dirname + "/file.txt").pipe(response);
    }else{
        // Otherwise we will call reponse.end with "Hello world". 
        response.end("Hello world.")
    }
}).listen(process.env.PORT, process.env.IP);
// For the created server, call the listen() method for the port and IP address found in the environment variables of the response. 
console.log("Server running");