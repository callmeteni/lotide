# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @callmeteni/lotide`

**Require it:**

`const _ = require('@callmeteni/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(...)`: The head function should not return the first element as an array. It should simply return the element itself.
* `middle(...)`: middle which will take in an array and return the middle-most element(s) of the given array.
* `tail(...)`: tail which returns the "tail" of an array: everything except for the first item (head) of the provided array.
* `eqArray(...)`: function eqArrays which takes in two arrays and returns true or false, based on a perfect match.
* `assertEqual(...)`: the function compare the two values it takes in and print out a message telling us if they match or not.
* `assertArraysEquals(...)`: assertArraysEqual which will take in two arrays and console.log an appropriate message to the console.
* `without(...)`: without which will return a subset of a given array, removing unwanted elements.
* `flatten(...)`: function flatten which will take in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.