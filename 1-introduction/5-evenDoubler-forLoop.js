var maxTime = 1000;

var evenDoubler = function(v, callback){
    console.log("Calling even doubler for " + v);
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

var handlResult = function(err, results, waitTime){
    if (err){
        console.log('Error: ' + err.message);
    }else{
        console.log('Result: ' + results + ', time: ' + waitTime);
    }
}

// Change the calls to a for loop
for (var i=0; i<10; i++){
    evenDoubler(i, handlResult);
}

console.log('---------------');
