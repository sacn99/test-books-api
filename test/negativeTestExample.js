const { assert } = require('chai');

describe('Array', () => {
  describe('#indexOf()', () => {
    it('Deberia retornar -1 cuando el valor no esta', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});