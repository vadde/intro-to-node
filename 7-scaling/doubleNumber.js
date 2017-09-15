// for use by 5-fork.js

var fun = require('./mathfun');

// We are registering an event on the process object 
// For the event "message"
process.on('message', function(m) {
    // whenever the child gets a message with command "double"
    if (m.cmd === 'double') {
        console.log('hs: I was asked to double ' + m.number);
        // The evenDoubler is invoked 
        fun.evenDoubler(m.number, function(err, result) {
            // We will use process to send the message back to the parent
            process.send({answer: result});
        });
    // If the command we get is done
    } else if (m.cmd === 'done') {
        // The child may exit the process
        process.exit();
    }
});