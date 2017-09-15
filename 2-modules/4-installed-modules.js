// We still need to require the installed module
var request = require('request');

// First parameter: The URL that we would like to receive. 
// Second parameter: The callback function – takes 3 parameters: error, response objects and the body string. 
request('http://pluralsight.com', function(error, response, body){
 if (!error && response.statusCode === 200){
     console.log(body);
 }
});