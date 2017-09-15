// Require the built-in module 'util'
var util = require("util");
var EventEmitter = require("events").EventEmitter; 

// This function will be used as an object later
function Resource(c){
    // Use this instead of creating an emitter
    var self = this
    process.nextTick(function(){
        var counter = 0;
        self.emit("start");
        var t = setInterval(function(){
            self.emit("data", ++counter);
            if (counter === c){
                 self.emit("end", counter);
                 clearInterval(t);
            }
        },10);
    });
    return (self);
};

// Use the inherits method to show that the Resource object inherits the EventEmitter object
util.inherits(Resource, EventEmitter);
// Export the Resource object
module.exports = Resource;

