if (typeof QUnit == 'undefined')
    QUnit = require('qunit-cli');

var Neural = require('../neural');

QUnit.module("Neural", function () {
  QUnit.test("Untrained input neural test", function(assert) {
    var neural = new Neural({father: null, mother: null});
    neural.input({mother: false, father:false});
    assert.equal(neural.output(), null, "Untrained neural must allwase output null");
    neural.input({mother: false, father:true});
    assert.equal(neural.output(), null, "Untrained neural must allwase output null");
    neural.input({mother: true, father:false});
    assert.equal(neural.output(), null, "Untrained neural must allwase output null");
    neural.input({mother: true, father:true});
    assert.equal(neural.output(), null, "Untrained neural must allwase output null");
  });
  QUnit.test("Trained input neural test for one value", function(assert) {
    var neural = new Neural({father: null, mother: null});
    neural.input({mother: false, father:false});
    neural.train(false);
    neural.input({mother: false, father:false});
    assert.equal(neural.output(), false, "Trained neural for one value must output the same value regardless of the input");
    neural.input({mother: false, father:true});
    assert.equal(neural.output(), false, "Trained neural for one value must output the same value regardless of the input");
    neural.input({mother: true, father:false});
    assert.equal(neural.output(), false, "Trained neural for one value must output the same value regardless of the input");
    neural.input({mother: true, father:true});
    assert.equal(neural.output(), false, "Trained neural for one value must output the same value regardless of the input");
  });
});
