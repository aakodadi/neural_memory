if (typeof QUnit == 'undefined'){
  QUnit = require('qunit-cli');
}

if (typeof Neural == 'undefined'){
  Neural = require('../neural');
}


QUnit.module("Neural", function () {
  QUnit.test("Untrained input neural test", function(assert) {
    var neural = new Neural({father: null, mother: null});
    neural.input({mother: false, father:false});
    assert.equal(neural.output(), null, "Untrained neural must always output null");
    neural.input({mother: false, father:true});
    assert.equal(neural.output(), null, "Untrained neural must always output null");
    neural.input({mother: true, father:false});
    assert.equal(neural.output(), null, "Untrained neural must always output null");
    neural.input({mother: true, father:true});
    assert.equal(neural.output(), null, "Untrained neural must always output null");
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
  QUnit.test("Trained input neural test for two values", function(assert) {
    var neural = new Neural({father: null, mother: null});
    neural.input({mother: false, father:false});
    neural.train(false);
    neural.input({mother: true, father:true});
    neural.train(true);
    neural.input({mother: false, father:false});
    assert.equal(neural.output(), false, "Trained neural for two values must output the value of the closest input trained for");
    neural.input({mother: false, father:true});
    assert.equal(neural.output(), false, "Trained neural for two values must output the value of the closest input trained for");
    neural.input({mother: true, father:false});
    assert.equal(neural.output(), true, "Trained neural for two values must output the value of the closest input trained for");
    neural.input({mother: true, father:true});
    assert.equal(neural.output(), true, "Trained neural for two values must output the value of the closest input trained for");
  });
});
