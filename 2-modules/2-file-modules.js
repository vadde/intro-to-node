// Require mathfun.js
var mathfun = require("./mathfun")


var handlResult = function(err, results, waitTime){
    if (err){
        console.log('Error: ' + err.message);
    }else{
        console.log('Result: ' + results + ', time: ' + waitTime);
    }
}

for (var i=0; i<10; i++){
    mathfun.evenDoubler(i, handlResult);
}

console.log('---------------');
