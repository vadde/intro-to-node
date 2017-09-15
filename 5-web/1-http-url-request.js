// Request using 'http' module

var http =  require("http");

console.log("Making the request.");

//Note: request does not take error as the first parameter
// First argument: url
// callback: receives the response
var req = http.request("http://www.google.com/", function(response){
    // Log the response status code
    console.log("Response status code: " + response.statusCode);
    response.pipe(process.stdout);
});

// in order to actually execute the request - re.end()
req.end();