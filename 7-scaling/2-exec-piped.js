var exec = require("child_process").exec;

// Pipe the uptime command to the cut command and slice part of the output
var child = exec('uptime | cut -d "," -f 1', function(err, stdout, stderr){
    if (err){
       console.log("Error: " + stderr);
    } else {
       console.log("Output: " + stdout); 
    }
});
console.log("PID is " + child.pid);