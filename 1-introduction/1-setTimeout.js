// Hello world example with setTimeout 
// Log Hello immediately and world after 1000ms
// The first argument of the setTimeout function is a callback function
// The second argument is the number of ms for timeout
// Here we have an anonymous callback
// Run from terminal: node 1-setTimeout

setTimeout(function(){
    console.log('world!');
})

console.log('Hello ');