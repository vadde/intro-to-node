// Run all tests except the selected one

var mathfun = require("./mathfun");
var should = require("should");

describe("MathFun", function(){
    describe("when used synchronously", function(){
        it("should double even numbers correctly", function(){
            mathfun.evenDoublerSync(2).should.equal(4);
        });
        // *** Run all tests except this one ***
         it.skip("should throw on odd numbers", function(done){
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