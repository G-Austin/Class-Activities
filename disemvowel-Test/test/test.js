var expect = require("chai").expect;
var disemvowel = require('../disemvowel');

describe("disemvowel", function() {
  it("should remove the vowels from any string", function (){
    expect(disemvowel("Fuck")).to.equal("Fck");
  });
  it("should remove all vowels from upcase strings", function() {
    expect(disemvowel("FUCK")).to.equal("FCK");
  });
  it("should ignore numbers in input strings", function() {
    expect(disemvowel("FUCK this is 2 hard for people")).to.equal("FCK ths s 2 hrd fr ppl");
  });
});
