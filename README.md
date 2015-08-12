# kontains

[![Build Status](https://travis-ci.org/joeyism/node-kontains.svg?branch=master)](https://travis-ci.org/joeyism/node-kontains)
[![Coverage Status](https://coveralls.io/repos/joeyism/node-kontains/badge.svg?branch=master&service=github)](https://coveralls.io/github/joeyism/node-kontains?branch=master)

A small tool to let you know if an object or an array contains an element

## Installation
To install in node, simply run

    > npm install --save kontains

To use in browser, simply add

    <script src="https://raw.githubusercontent.com/joeyism/node-kontains/master/index.js"></script>

## Usage
For your object or array, just add `.contains()` at the end to determine if they contain such element. It is important to note that the searching is also case sensitive.

### Object

    {"elm1": "one", "elm2": "two"}.contains("elm1") // true 
    {"elm1": "one", "elm2": "two"}.contains("elm2") // true 
    {"elm1": "one", "elm2": "two"}.contains("one")  // false
    {"elm1": "one", "elm2": "two"}.contains("ELM2") // false

### Array

    [1, 2, 3].contains(1)   // true
    [1, 2, 3].contains(one) // false

## Version
**1.0.0**
* First publish
