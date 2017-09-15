var Resource = require("./resource");

// Create an instance of a resource, which is itself an event emitter
var r = new Resource(5);

r.on("start", function (){
    console.log("Emitting started!");
});

r.on("data", function (data){
    console.log("Data received -> " + data);
});

r.on("end", function (num){
    console.log("Emitting ended with " + num + " data events.");
});