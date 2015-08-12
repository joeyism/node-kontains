"use strict";

var op = Object.prototype;
var objectContains = function(elmToMatch){
    return !Object.keys(this).every(function(key){
        return (key !== elmToMatch);    
    });
};
op.contains = objectContains;

var ap = Array.prototype;
var arrayContains = function(elmToMatch){
    return (this.indexOf(elmToMatch) > -1);
};
ap.contains = arrayContains;
