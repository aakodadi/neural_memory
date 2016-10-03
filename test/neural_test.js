if (typeof QUnit == 'undefined')
    QUnit = require('qunit-cli');

Neural = require('../neural');

//const neural = new Neural({father: null, mother: null});
QUnit.test("hello test", function(assert) {
  assert.ok(1 == "1", "Passed!");
});
