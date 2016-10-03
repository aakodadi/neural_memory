if (typeof QUnit == 'undefined')
    QUnit = require('qunit-cli');

var Neural = require('../neural');

QUnit.module("Neural", function () {
  QUnit.test("Untrained input neural test", function(assert) {
    var neural = new Neural({father: null, mother: null});
    neural.input({mother: false, father:false});
    assert.equal(neural.output(), null, "Untrained neural must output null");
  });
});
