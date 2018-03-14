var expect = require('chai').expect;
var formatName = require('../src/names.js');

describe('formatNames', function() {
  it('should return a plain name if only one name is provided', function() {
    expect(formatName(['name one'])).to.equal('name one');
  });
  it('should separate names with an ampersand if it receives two', function() {
    expect(formatName(['name one, name two'])).to.equal('name one & name two');
  });
  it('should separate initial names with commas and last with ampersand', function() {
    expect(formatName(['name one, name two, name three'])).to.equal('name one, name two & name three');
  });
});
