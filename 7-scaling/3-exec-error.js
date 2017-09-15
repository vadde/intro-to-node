var exec = require("child_process").exec;

// Make an error in the command, type 2cut instead of cut
// Error: /bin/sh: 2cut: command not found
var child = exec('uptime | 2cut -d "," -f 1', function(err, stdout, stderr){
    if (err){
       console.log("Error: " + stderr);
    } else {
       console.log("Output: " + stdout); 
    }
});
console.log("PID is " + child.pid);