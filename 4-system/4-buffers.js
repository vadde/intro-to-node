// Instatntiate a buffer
var b = new Buffer("Hello world");
// convert it to a string before writing to the console (default encoding utf8)
console.log(b.toString());
//we can also pass another encoding as an argument
console.log(b.toString("base64"));

var v = new Buffer("Hello world").toString("base64");
// Pull out the first two characters only 
console.log(b.toString("utf-8", 0, 2));