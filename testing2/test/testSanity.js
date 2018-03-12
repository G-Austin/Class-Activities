var expect = require("chai").expect;
var should = require("chai").should();
var multiply = require("../src/multiply");
var PageUtilities = require("../src/PageUtilities");

describe("Universe", function(){
    it("should be self-consistent", function(){
        expect(2).to.equal(2);
    });

    it("should correctly multiply 3 * 3", function(){
        expect(multiply(3, 3)).to.equal(9);
    });
});

describe("page_utilities", function() {
  var page_utilities = new pageUtilities(10, 3);

  it("should keep track of how many posts are in the blog", function() {
    page_utilities.posts.should.equal(10);
    expect(page_utilities.posts).to.equal(10);
  });
  it("should keep track of the blogs paginations limit", function() {
    
  })
})
