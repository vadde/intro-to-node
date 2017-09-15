var maxTime = 1000;

var evenDoubler = function(v, callback){
    var waitTime = Math.floor(Math.random()*(maxTime+1));
    if (v%2){
        setTimeout(function(){
            callback(Error("Error: odd number"));
        }, waitTime)
    } else{
        setTimeout(function(){
           callback(null, v*2, waitTime);
        }, waitTime)
    }
}

var counter = 0;

for (var i=0; i<10; i++){
    // Change the named function to anonymous and increment a counter inside of it. 
    // Only when the counter comes to 10, write "Done". 
    evenDoubler(i, function(err, results, waitTime){
    if (err){
        console.log('Error: ' + err.message);
    }else{
        console.log('Result: ' + results + ', time: ' + waitTime);
    }
    if (++counter === 10){
        console.log('Done');
    }
   });
}

console.log('---------------');
