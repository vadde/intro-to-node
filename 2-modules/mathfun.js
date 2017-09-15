// used with 1
var maxTime = 1000;

var evenDoubler = function(v, callback){
    var waitTime = Math.floor(Math.random()*(maxTime+1));
    if (v%2){
        setTimeout(function(){
            callback(new Error("Odd number"));
        }, waitTime)
    } else{
        setTimeout(function(){
           callback(null, v*2, waitTime);
        }, waitTime)
    }
}

// One has to export a variable or function, otherwise it is not visible from outside.
module.exports.evenDoubler = evenDoubler;

module.exports.foo = "bar";