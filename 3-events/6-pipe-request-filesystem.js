var request = require("request");
var fs = require("fs");
var zlib = require("zlib");

// Writing the request in the file system
request("http://www.pluralsight.com/").pipe(fs.createWriteStream("pluralsight.html"));