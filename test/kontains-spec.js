"use strict";
var expect = require("chai").expect;
require("../index");

describe("kontains", function(){

    describe("object", function(){
        
        it("should confirm or deny whether an object contains a specific element", function(){
            var obj = {
                "elm1": "one",
                "elm2": "two"
            };

            expect(obj.contains("elm1")).to.be.true;
            expect(obj.contains("elm2")).to.be.true;
            expect(obj.contains("ELM1")).to.be.false;
            expect(obj.contains("ELM2")).to.be.false;
        });
    });
});
