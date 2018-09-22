const assert = require("assert")

describe("Assignment 2 - transform", function () {
  it("JS file should exist, and exported value should be a function", function () {
    const groupAdultsByAgeRange = require("./2-transform").groupAdultsByAgeRange
    assert.strictEqual(typeof groupAdultsByAgeRange, "function", "groupAdultsByAgeRange should be a function")
  })
  it("groups array of people by age, filters out people under 18", function () {
    const groupAdultsByAgeRange = require("./2-transform").groupAdultsByAgeRange
    const grouping = groupAdultsByAgeRange([
      { name: "pete", age: 10 },
      { name: "dove", age: 17 },
      { name: "dave", age: 18 },
      { name: "hall", age: 19 },
      { name: "donn", age: 20 },
      { name: "trey", age: 21 },
      { name: "hann", age: 29 },
      { name: "chew", age: 30 },
      { name: "cloe", age: 31 },
      { name: "dart", age: 39 },
      { name: "this", age: 40 },
      { name: "dame", age: 41 },
      { name: "henk", age: 49 },
      { name: "anna", age: 50 },
      { name: "olga", age: 51 },
      { name: "bert", age: 52 },
      { name: "oldd", age: 120 },
    ])
    assert.deepStrictEqual(grouping,
      {
        '20 and younger':
          [{ name: 'dave', age: 18 },
          { name: 'hall', age: 19 },
          { name: 'donn', age: 20 }],
        '21-30':
          [{ name: 'trey', age: 21 },
          { name: 'hann', age: 29 },
          { name: 'chew', age: 30 }],
        '31-40':
          [{ name: 'cloe', age: 31 },
          { name: 'dart', age: 39 },
          { name: 'this', age: 40 }],
        '41-50':
          [{ name: 'dame', age: 41 },
          { name: 'henk', age: 49 },
          { name: 'anna', age: 50 }],
        '51 and older':
          [{ name: 'olga', age: 51 },
          { name: 'bert', age: 52 },
          { name: 'oldd', age: 120 }]
      }

    )
  })
})
