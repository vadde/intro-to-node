var request = require("request");
var fs = require("fs");
var zlib = require("zlib");

// Writing to a file in the file system, zip the data before that
request("http://www.pluralsight.com/").pipe(zlib.createGzip()).pipe(fs.createWriteStream("pluralsight.html.gz"));

// CreateGZip returns a stream that is both readable and writeable.
// It reads and uncompressed content, outputs compressed content. 
// You can than chain together, to write that stream to the file system, bt with a different extension .gz. 
// zcat - Linux command for openning zipped file