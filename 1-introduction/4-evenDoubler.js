var maxTime = 1000;

// If input is even, double it
// if odd, throw an error
var evenDoubler = function(v, callback){
    // Add a random wait time for the setTimeout callback
    var waitTime = Math.floor(Math.random()*(maxTime+1));
    if (v%2){
        setTimeout(function(){
            callback(Error("Error: odd number"), null, waitTime);
        }, null, waitTime)
    } else{
        setTimeout(function(){
           callback(null, v*2, waitTime);
        }, waitTime)
    }
}

// 3. Print out the result and how long it took for it
var handlResult = function(err, results, waitTime){
    if (err){
        console.log('Error' + err.message);
    }else{
        console.log('Result: ' + results + ', time: ' + waitTime);
    }
}

// 2. When even doubler is finished (with the number to be doubled)
// execute the handleResult callback
evenDoubler(2, handlResult);
evenDoubler(3, handlResult);
evenDoubler(4, handlResult);
evenDoubler(5, handlResult);

// 1. This is executed first
console.log('---------------');
