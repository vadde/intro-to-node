// Require the EventEmitter from the 'events' module
var EventEmitter = require('events').EventEmitter; 

// --- The emitting part
var getResource = function(c){
    // 1. Instantiate an emitter
    var emitter = new EventEmitter();
    // process.NextTick() – on the next tick of the event loop, execute this function. 
    // We are doing that in order to emulate an asynchronous function.
    process.nextTick(function(){
        var counter = 0;
        // 2. Emit events 'start', 'data' and 'end' (names are freely given)
        emitter.emit('start');
        var t = setInterval(function(){
            emitter.emit('data', ++counter);
            if (counter === c){
                 emitter.emit('end', counter);
                 // When the counter gets to the maximum number, we clear the interval
                 clearInterval(t);
            }
        },10);
    });
    // 3. return the emitter
    return (emitter);
};



var r = getResource(5);

// the subscribing part
r.on("start", function (){
    console.log("Emitting started!");
});

r.on("data", function (data){
    console.log("Data received -> " + data);
});

r.on("end", function (num){
    console.log("Emitting ended with " + num + " data events.");
});