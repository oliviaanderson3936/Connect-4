import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | connect4', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:connect4');
    assert.ok(route);
  });
});
