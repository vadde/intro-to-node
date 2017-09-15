var request = require("request");
var fs = require("fs");
var zlib = require("zlib");

// --- Piping the request stream to standard output
// var s = request("http://www.pluralsight.com/");
// s.pipe(process.stdout);

// --- All in one line
request("http://www.pluralsight.com/").pipe(process.stdout);
