var should = require('should');
describe("Basic Test", function() {
  it('should return equal when you compare 1 and 1', function() {
    should(1).be.exactly(1.).and.be.a.Number();
  });
  it('should not be equal when you compare apples to oranges', function() {
    should('apples').not.equal('oranges');

  });
});
