// Mocha testing framework and should.js modules for unit testing
// 1. Install the mocha command globally 
// npm install mocha -g
// 2. Install mocha locally
// npm install mocha
// 3. Install should.js locally
// npm install should
// Go to the project directory
// Run the tests from there simply by typing "mocha -- *.js"
// Or specify the path to the test files

var mathfun = require("./mathfun");
var should = require("should");

// Describe – for describing test suits
// they can be nested
// first argument: textual description
// second argument: function containing other "describes" or "its"
describe("MathFun", function(){
    // Describe - when/if something happens
    describe("when used synchronously", function(){
        // it - what should happen
        it("should double even numbers correctly", function(){
            mathfun.evenDoublerSync(2).should.equal(4);
        });
         it("should throw on odd numbers", function(done){
            (function() {mathfun.evenDoublerSync(3) }).should.throw(/Odd/);
            done();
        });
    });
    
    describe("when used asynchronously", function(done){
        it("should double even numbers correctly", function(){
             mathfun.evenDoubler(2, function(err, results){
                should.not.exist(err);
                results.should.equal(4);
                done();
             });
        });
         it("should throw on odd numbers", function(done){
            mathfun.evenDoubler(3, function(err, results){
                should.exist(err);
                should.not.exist(results);
                done();
            });
        });
    });
});