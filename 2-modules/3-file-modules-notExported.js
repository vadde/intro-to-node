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
// If we try to use a variable that is not exported, we get a warning that it is undefined
console.log("MaxTime" + mathfun.maxTime);
