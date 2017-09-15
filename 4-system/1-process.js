// Stdin stream starts paused, we need to resume it in order for it to start receiving information. 
process.stdin.resume();
process.stdin.setEncoding("utf8");

process.stdin.on("data", function(chunk){
    process.stdout.write("Data>>> " + chunk);
});

process.stdin.on("end", function(){
    process.stderr.write("End>>>");
});

// We can emit a sig term event, by killing the process from another command line. 
// it is emitted by executing kill {process.pid} from another command line
// We can still interact with the program, it is not killed until we do CTRL+D
process.on("SIGTERM", function () {
    process.stderr.write("Why are you trying to end me? :) >>>");
});

console.log("Node is running as process# " + process.pid);

// We need to start it from the command line. 
// When we type on the standard output and press enter, it will be written on the standard output.
// CTRL + D is for exiting the program.
