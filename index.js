"use strict";

var op = Object.prototype;
var objectContains = function(elmToMatch){
    return !Object.keys(this).every(function(key){
        return (key !== elmToMatch);    
    });
};

op.contains = objectContains;

Array.prototype.contains = Array.prototype.includes;
