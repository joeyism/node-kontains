# kontains
A small tool to let you know if an object or an array contains an element

## Installation

    > npm install --save kontains

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
