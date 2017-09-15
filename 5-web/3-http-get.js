var http =  require("http");

var options = {
  host: "www.google.com",
  port: "80",
  path: "/",
  method: "GET"
};

console.log("Making the request.");

// Simplified http.request(), for http.get() no req.end() is needed
var req = http.get(options, function(response){
    console.log("Response status: " + response.statusCode);
    response.pipe(process.stdout);
});