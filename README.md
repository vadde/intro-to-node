# Introduction to Node.js by Paul O'Fallon
### Code snippets based on the course with additional explanation

## Node.js 

-	Server-side JavaScript platform
-	Evented I/O for Chrome V8 JavaScript Engine

## Installation for Windows
-	Node.js Windows installer download: https://nodejs.org/en/

## Node.js Building Blocks

|    **libuv + V8 + js,c++ = Node.js**    |
|-----------------------------------------|


-	**libuv** – Abstracts several Unix-only libraries that were once directly required by the project. It was built as part of porting Node.js to the Windows environment.
-	**V8 Google’s JavaScript Engine**  – the same engine found in the Chrome web browser. 
-	**Custom JS and C++ code**  developed specifically for the Node.js platform itself.

## NVM – Node Version Manager
- Manage multiple versions of Node (in the same manner as Ruby’s RVM)
- Windows Installer https://github.com/coreybutler/nvm-windows/releases

|    **Command**    | **Description** |
|----------------|------------|
|  **nvm list**  | list all Node.js versions installed on the system |
|  **nvm list available** | list all Node.js that are available for installation  |
| **node -v** | see currently used version of Node.js  |
| **nvm install {version}** | install the selected version of Node.js, optional argument: {architecture}, e.g. nvm use 0.12.9 64  |
| **nvm use {version}** | use this already installed version  |
            

## How to program using Node.js?
- Using **node** directly, writing Node.js and JavaScript code in the console. 
- Running a JS script file **node {fileName}.js** 
- On your local system or using https://c9.io, **Cloud9** online IDE for Node.js, mostly written in Node.js itself. 
![grafik](https://user-images.githubusercontent.com/2240623/30827614-036ee0e6-a23b-11e7-8240-75ecbd178d91.png)
![grafik](https://user-images.githubusercontent.com/2240623/30827690-430db9ac-a23b-11e7-8b47-f9ac28f6595c.png)


# intro-to-node/1-introduction/   - Node.js Introduction

###   1-setTimeout.js
-  Log "Hello" immediately and "world" after 1000ms
- Anynomous callbacks with closures
- *setTimeout(callback, timeut)* and *setInterval(callback, interval)* are built-in functions, available from the global namespace. The first argument of the functions is a callback function and the second argument is the number of miliseconds for timeout/interval. 

###    2-setTimeout-named.js
- Named callback functions (name of the callback is "handleTimeout")
- Log "Timeout at 200ms" after 200ms
###    3-server.js
- Creates a server listening on the port 1337. The body content is “Hello world”. 

![alt text](https://user-images.githubusercontent.com/2240623/30827424-57d66344-a23a-11e7-94d5-a1848df5529b.png "server listening on the port 1337")

## Node’s Event Loop

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

Some events will overlap. For instance we can receive a timer event after a request for opening a file has been received and before the file is open. TCP and HTTP requests can be received while we are sending a message to an external process. Node does not pause and wait for any of these events to complete, it continues to react to events as they arrive.

A common example to demonstrate this non-blocking event-driven communication is a web application that fetches data from a database. The application raises an event, an HTTP request is received, this event generates a query for the database. Node receives an event from the database that the query is complete, an HTTP response is formulated. While it is waiting for a response from the database, node is not blocked and is free to handle additional requests. 

On the other hand, traditional serverside programming requires multiple threads for multiple requests. 

 ## Difference between synchronous and asynchronous Node.js code
 - *Synchronous* - Each function returns a value before the next is called. 
 - *Asynchronous* - callbacks are used, the result object is an event emmiter, which is capable of emitting events in the future. 
 
 ### 4-evenDoubler.js
The callback waits a random time, doubles the input if it is even, throws an error if it is odd. 
This example demonstrates a case when we have multiple calls and the result does not have to be in the same order as the invocation, since the calls need a different, random amount of time. 

 
 ### 5-evenDoubler-forLoop.js
 When we call the function in a for-loop, the order of the results can also not be predicted. 
 
![grafik](https://user-images.githubusercontent.com/2240623/30870830-375cc21a-a2e5-11e7-95cb-37d1f3e09bad.png)
![grafik](https://user-images.githubusercontent.com/2240623/30870908-6a75f9d2-a2e5-11e7-94c4-74b1cd3c35f2.png)


 ### 6-evenDoubler-counter.js
Change the named function to an anonymous one and increment a counter. Only when the counter comes to 10, write that "Done".

![grafik](https://user-images.githubusercontent.com/2240623/30870967-95a91eb8-a2e5-11e7-9f36-121378bb37c0.png)
![grafik](https://user-images.githubusercontent.com/2240623/30870983-a24f6ec4-a2e5-11e7-8fd1-351ca35d7d8f.png)


# intro-to-node/2-modules/ -  Using modules in your application

Modules are a way to bring external functionality into your Node.js application. 
The *require* function loads a module and assigns it to a variable so that it can be used in your application. 

Convention: *Camel case* is used for variables that can be instantiated with *new*. 

### a) Import whole module

```js
var module = require("module_name");
```
### b) Import one variable or function of the module


```js
var variable = require("module_name").variableName;
```


There are three **sources for modules**:

## 1. Built-in modules

a) **Pre-packaged with Node** 

e.g. *setInterval* and *setTimeout* are in the Node's global namespace

b) **The ones that have to be required (most modules)**

### 1-builtins.js

The argument of the *require* method is the string identifier of the module. This is an example for the "os" module. 

##  2. Project files
1) Each .js file is its own module, a way of modularizing application's code. We do not include the .js extension in the require. One uses relative path navigation.
 
###  2-file-modules.js

In this example we require *mathfun.js*. 

Note: One has to export a variable or function, otherwise it is not visible from outside.

```js
module.exports.variableName = variableName;
```

### 3-file-modules-notExported

If we try to use a variable that is not exported, we get a warning that it is undefined.

## 3. A third party module via NPM

a) **Application specific**

```js
npm install module_name
```

installs the module to the *node_modules* folder.

b) **Have the module accessible via the command line - globally**

```js
npm install -g module_name
```

### 4-installed-modules.js

Require the installed module "request". 


# intro-to-node/3-events/ - Events in node.js

## Difference between callbacks and events

### Callback 
- You do not receive any results until you receive all the results. In between, the results are stored in memory.
- All or nothing proposition: If the error has been set, the call is assumed to have failed. 


###  Events
- The function returns a value immediately. The value is an instance of the EventEmitter object.  
- An event is more of a publish/subscribe approach, you can invoke the "on" function repeatedly, to provide multiple functions to invoke on each event. That is, in essence, subscribing to the events. Functions associated for each event will be invoked for each item of the result. 
- An error is emitted as a separate event, even after some events have been emitted. Access to partial results may be desirable in some situations. 

Functions of an event emitter object: emit (publishing an event) and on (subscribing to an event).

There are **two ways of using event emitters**:

**1) Returning an emitter**

Example: 

### 1-events-return-emitter.js

**2) Inheriting from EventEmitter**

Example: 

### 2-events-inherited.js and resource.js

split into two files, using *this* and *util.inherits*

## Streams in Node.js

- Streams are instances of EventEmitter with an agreed upon interface.

- A stream is an instance of a ReadableStream or WriteableStrea or both.

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

# intro-to-node/4-system/ - Accessing the local system
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

# intro-to-node/5-web/ - Making web requests in Node.js
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

intro-to-node/6-testing/

# intro-to-node/6-testing/ - Testing node.js applications (basic)
1. Assert
2. Mocha
3. Should.js

# intro-to-node/7-scaling/ - Scaling node.js applications
child_process - exec, spawn, fork

