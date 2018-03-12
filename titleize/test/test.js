// Your task is to write tests for a function that title-cases incoming names. For example: titleize(‘mr jones’) returns ‘Mr Jones’.
var expect = require("chai").expect;
var titleize = require("../titleize");

describe("titleize", function() {
  it("should change first letter of each word to uppercase", function() {
    expect(titleize("ms badass")).to.equal("Ms. Badass");
  });
  it("should append a period to leading titles", function() {
    expect(titleize("Ms Badass")).to.equal("Ms. Badass");
  });
  it("should not change properly cased strings", function() {
    expect(titleize("Ms. Shirley Temple"))to.equal("Ms. Shirley Temple");
  });
})
// Bonus: create an array of titles, such as Dr; Mr; Ms; etc. If the string begins with such a title, capitalize it, and append a period.
//
// Proceed as with disemvowel, considering:
//
// What constitutes a “representative expected input”?
//
// What is unexpected input? How do you want titleize to respond to this?
//
// Do you want to allow arbitrarily long names, or impose a cutoff? Hint: There’s no right answer, here. Choose an implementation, and write a test reflecting your choice.
//
// Once you’ve written your tests, run them to ensure they fail.
//
// Next, start implementing titleize. Pass one test at a time.
//
// Once you’ve passed all tests, congratulate yourself! Be prepared to explain your tests to the rest of the class.
