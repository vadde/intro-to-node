// Request is a third party module installed via npm
// It is a simplified HTTP  client
var request = require("request");

// Call the request with a URL and it will return us a stream 
var stream = request("http://www.pluralsight.com/");

// Subscribe ri 'data' and 'end' events
// The data event is emitted when a new data has been received 
// (the parameter is the actual data received
stream.on("data", function(chunk){
   console.log("Data>>>>> " + chunk); 
});
// the end event is emitted when there is no more data to be read. 
stream.on("end", function(){
   console.log("Done. >>>>> "); 
});

// Note: the data is received in chunks, not the whole page is received at once. 