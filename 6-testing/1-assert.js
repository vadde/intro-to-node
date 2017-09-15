// Using the "assert" built-in node.js module in unit testing

// Require the module
var assert = require("assert");
var mathfun = require("./mathfun");

// --- Synchronous implementation ---
// Directly call assert methods

// Even value passed - multiplication with 2
assert.strictEqual(mathfun.evenDoublerSync(2), 4);

// Odd value passed - exception expected
assert.throws(function(){
    mathfun.evenDoublerSync(3);
}, /Odd/);
// Optional parameter of the THROWS method: 
// Regular expression for the text of the error
// Error message: throw (new Error("Odd number"));
// Check if the error message contains the word "Odd"

// --- Asynchronous implentation ---
// Assertions are in the callback

// Even value passed
mathfun.evenDoubler(2, function(err, results){
    assert.ifError(err); // checking if there was an error
    assert.equal(results, 4, "evenDoubler failed on even number");
    // The last argument of EQUAL (and similar methods)
    // The message logged if the assertion fails
});

// Odd value passed
mathfun.evenDoubler(3, function(err, results){
    assert.notEqual(err, null); 
});
    

