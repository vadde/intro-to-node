// Demonstating the usage of the exec function
// Running a command string in a shell
// exec(command, options[], callback)
// The arguments of the callback are (err, stdout, stderr)

// Require the exec command from the child_process module
var exec = require("child_process").exec;

// execute the Unix uptime command
var child = exec("uptime", function(err, stdout, stderr){
    if (err){
       console.log("Error: " + stderr);
    } else {
       console.log("Output: " + stdout); 
    }
});
console.log("PID is " + child.pid);