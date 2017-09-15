var http =  require("http");

// Using options instead of the URL
var options = {
  host: "www.google.com",
  port: "80",
  path: "/",
  method: "GET"
};

console.log("Making the request.");

var req = http.request(options, function(response){
    console.log("Response status: " + response.statusCode);
    response.pipe(process.stdout);
});

req.end();