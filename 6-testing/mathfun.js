// The code being tested

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

// Added asynchronous implementation
var evenDoublerSync = function(v){
    if (v%2){
       throw (new Error("Odd number"));
       
    } else{
       return (v*2);
    }
}

module.exports.evenDoubler = evenDoubler;
// Exported asynchronous implementation
module.exports.evenDoublerSync = evenDoublerSync;

module.exports.foo = "bar";
