// This will fail if you run it from a debugger
// Error: listen EADDRINUSE 
// Instead run from the console

// Fork is built on spawn, but especially for processes that are also node applications
var fork = require('child_process').fork;

// We are running another node.js program doubleNumber
// fork returns us a child process object
var child = fork(__dirname + '/doubleNumber.js');

// On this child process we will invoke the the send method
// The message that we will be sending is a JSON object
// which has a command called double and a number 20
child.send({cmd: 'double', number: 20});

// We are also listening for a message from the child
child.on('message', function(m) {
    // Printing the answer to the console
    console.log('The answer is: ', m.answer);
    //send another command to the child - done
    child.send({cmd: 'done'});
});

