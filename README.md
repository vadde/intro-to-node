Introduction to Node.js by Paul O'Fallon
Code snippetsare  based on the course, with some modification, additional code comments and explanation

-	Server-side JavaScript platform
-	Evented I/O for Chrome V8 JavaScript Engine

1. Installation
-	Node.js Windows installer download: https://nodejs.org/en/

2. Node.js Building Blocks

libuv + V8 + js,c++ = Node.js

-	Libuv – Abstracts several Unix-only libraries that were once directly required by the project. 
It was built as part of porting Node.js to the Windows environment.
-	V8 Google’s JavaScript Engine – the same engine found in the Chrome web browser. 
-	The custom JS and C++ code developed specifically for the Node.js platform itself.

3. NVM – Node Version Manager
- Manage multiple versions of Node (in the same manner as Ruby’s RVM)
- Windows Installer https://github.com/coreybutler/nvm-windows/releases

nvm list           - list installed versions on the system
nvm list available – list available versions for installation
node -v            – see currently used version
nvm install {version}  - install the selected version of Node.js
                     optional argument: architecture

nvm use {version} - use this already installed version

5. Using node directly via terminal
Write Node.js and JavaScript code in the terminal. 

6. Using node by running a JS script file
node {fileName}.js

Module 1
Node.js Introduction
   1-setTimeout.js
Anynomous callbacks with closures
setTimeout(callback, timeut) and setInterval(callback, interval) built-in functions
   2-setTimeout-named.js
Named callback functions
   3-server.js
Creates a server listening on the port 1337 and the content is “Hello world”. 
// TODO ADD IMAGE

Cloud9 Development environment
// Add image

Node’s Event Loop

Similar to the browser, that is waiting for keyboard and mouse events, the server is constantly waiting for events. 
They can be externally or internally generated:
-	Incoming HTTP requests
-	TCP connections
-	Timers
-	Internal events
Additionally, other events may be triggered as a response to a request against an external resource
-	Asking node to open a file for reading
-	Fire an event when the file is open and ready
-	Sending a message to an external process will fire an event when the message has been sent
etc. 

Some events will overlap. For instance we can receive a timer event after a request for opening a file has been received and before the file is open. 
TCP and HTTP requests can be received while we are sending a message to an external process. 
Node does not pause and wait for any of these events to complete, it continues to react to events as they arrive.

A common example to demonstrate this non-blocking event-driven communication is a web application that fetches data from a database. 
The application raises an event, an HTTP request is received, this event generates a query for the database. Node receives an event from the database that the query is complete, an HTTP response is formulated. While it is waiting for a response from the database, node is not blocked and is free to handle additional requests. 

On the other hand, traditional serverside programming requires multiple threads for multiple requests. 

 Difference between synchronous and asynchronous code
 Synchronous - Each function returns a value before the next is called. 
 Asynchronous - callbacks are used, the result object is an event emmiter, which is capable of emitting events in the future. 
 
 4-evenDoubler.js
 Demonstrates a case when we have multiple calls and the result does not have to be in the same order as the invocation, since the calls need a different, random amount of time. 
 // TODO add images
 5-evenDoubler-forLoop.js
 When we call the function in a for-loop, the order of the results can also not be predicted. 
 // TODO add images
 6-evenDoubler-counter.js
Change the named function to an anonymous one and increment a counter. Only when the counter comes to 10, write that "Done". 

Using modules in your application
Modules are a way to bring external functionality into your node.js application. 
The require function loads a module and assigns it to a variable so that it can be used in your application. 
Convention: Camel case is used for variables that can be instantiated with new. 
Import whole module
var module = require("module_name");
Import one variable or function of the module
var variable = require("module_name").variableName;
There are three sources for modules
1. Built-in modules
a) Pre-packaged with node 
setInterval and setTimeout are in the node global namespace
b) The ones that have to be required (most)
The arguements of the require method is the string identifier of the module
Example "os" module in 1-builtins.js
2. Project files
1) Each .js file is its own module, a way of modularizing application's code. 
We do not include the .js extension in the require. One uses relative path navigation. 
Example" 2-file-modules.js, requires mathfun.js. 
Note: One has to export a variable or function, otherwise it is not visible from outside.
module.exports.variableName = variableName;
If we try to use a variable that is not exported, we get a  warning that it is undefined
Example: 3-file-modules-notExported
3) A third party module via NPM
installed via npm install module_name to the node_modules folder
That is application specifical
To have it accessible via the command line - globally
npm install -g module_name
Example: the "require" module in 4-installed-modules.js

Events in node.js

Difference between callbacks and events

Callback 
- You do not receive any results until you receive all the results. In between, the results are stored in memory.
- All or nothing proposition: If the error has been set, the call is assumed to have failed. 

Events
- The function returns a value immediately. The value is an instance of the EventEmitter object.  
- An event is more of a publish/subscribe approach, you can invoke the "on" function repeatedly, to provide multiple functions to invoke on each event. In essence, subscribing to the events. Functions associated for each event will be invoked for each item of the result. 
- An error is emitted as a separate event, even after some events have been emitted. Access to partial results may be desirable in some situations. 

Functions of an event emitter object: emit (publishing an event) and on (subscribing to an event).

There are two ways of using event emitters:
1) Returning an emitter
Example: 1-events-return-emitter.js
2) Inheriting from EventEmitter
Example: 2-events-inherited.js and resource.js, split into two files. 
Using this and util.inherits

Streams in Node.js
1) Streams are instances of EventEmitter with an agreed upon interface
2) A stream is an instance of a ReadableStream or WriteableStrea or both

Interface for a ReadableStream
readable - boolean indicator if the stream is readable or not
event: "data" - new data has arrived
event: "end" - there is no more data
event: "error"
event: "close"
Functions
pause(), resume(), destroy(), pipe()
Example: request(simple HTTP client interface)  3-readable-stream.js

Interface for a WritableStream
writable - boolean indicator if the stream is writable or not
event: "drain" - it is safe to write to a stream
event: "error"
event: "close"
event: "pipe" - passed to a readable streams pipe function
Functions
write(), end(), destroy(), destroySoon()
Example:  stdout 4-writeable-stream.js

Piping - 5-pipe.js

Similar to piping commands in Unix, data read from the readable stream is piped to the writeable stream. Node handles well the situation when a readable stream produces data that a writeable stream cannot so quickly consume. 

ReadableStream pipe() -> WritableStream event 'pipe'
When you invoke a pipe function on a readable stream, you pass as an argument the writeable stream you want to pipe to. This in turn emits the pipe event on the writeable stream.

ReadableStream event "data" -> WritableStream write()
When data arrives to the readable stream, the data event is emitted and the write function on the writeable stream is invoked. 

WritableStream write() returns false -> ReadableStream pause()
If at some point the write function returns a false value, indicating that no more data should be written, the pause function of the readable stream is called to stop the flow of data. 

WritableStream event 'drain' -> ReadableStream resume()
Then, once the writeable stream is ready again (the drain event is emitted), the resume() for the reading stream is called. 

ReadableStream event 'end' -> WritableStream end()
One the readable stream is finished, the end event is emitted and the end() function of the writeable stream is called. 

Piping the resulting request stream to standard output: 5-pipe-request-standard-output
Piping the request to the file system - 6-pipe-request-filesystem.js
A stream that is both readable and writeable (request to a zipped file) - 7-pipe-request-zip.js
CreateGZip returns a stream that is both readable and writeable. It reads and uncompressed content, outputs compressed content. 
zcat - Linux command for openning zipped file

Accessing the local system
1) The process object: 1-process.js
The process object provides a way for your application to manage its own processes as well as other processes on the system. It is available by default in your node application, it does not need to be required. 

A collection of streams
process.stdin – readable stream
process.stdout – writeable stream
process.stderr – writeable stream

Attributes of the current process
process.env – list of environment variables
process.argv – command line arguments
process.cwd - current working directory
process.pid etc.

Process related actions
process.abort()
process.kill()
process.chdir() - change directory
etc.

It is also an instance of the EventEmmiter, it emits an event exit when a process is about to exit, emits an ecent uncaughtException if an exception gets to the eventloop. 


Interacting with the File System
Synchronous approach - 2-fs-sync.js
Asynchronous approach - 3-fs-async.js

Buffers
The Buffer class provides a raw memory allocation for dealing with binary data directly
Buffers can be converted to/from strings using an encoding - ascii, utf8(default), binary, hex etc.
Example: 4-buffers.js


Making web requests in Node.js
1. Making a client using http module
http.request(options, callback)
callback recieves the response
URL as the options parameter - 1-http-url-request.js
status code, request.end
opctions -  2-http-options-request.js
http.get() no req.end is needed - 3-http-get.js

2. Making a web server
call the http.createServer function which accepts a single function as
an argument, which accepts both a request and a response. This function is invoked on each request. 
4-http-server.js

3. Web sockets
5-websockets.js (server code) and index.html (client code)

Testing node.js applications (basic)
1. Assert
2. Mocha
3. Should.js

Scaling node.js applications
child_process - exec, spawn, fork

