// A similar example with a named callback
var handleTimeout = function(){
    console.log("Timeout at 200s");
};

setTimeout(handleTimeout, 200);

console.log("Running");