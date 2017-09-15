var spawn = require('child_process').spawn,
    // spawn(command, [options])
    //Unix ps command – get a list of processes 
    ps    = spawn('ps', ['ax']),
    // Grep – look for the phrase "node" 
    grep  = spawn('grep', ['node']);

// The child processes have stdin, stdout and stderr as streams
// We can pipe them one to the other

// Take the standard output of the ps command
// pipe it to the standard input of the grep command
ps.stdout.pipe(grep.stdin);
// Take the standard output of the grep
// send it to the console
grep.stdout.pipe(process.stdout);

// One can also watch for events on the streams as well
// Looking for a data event on the standard error to see if there is an error on the ps command
ps.stderr.on('data', function (data) {
  console.log('ps stderr: ' + data);
});

grep.stderr.on('data', function (data) {
  console.log('grep stderr: ' + data);
});