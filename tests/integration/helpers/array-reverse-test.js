import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Helper | array-reverse', function(hooks) {
  setupRenderingTest(hooks);

  test('can reverse an array', async function(assert) {
    const array = [1, 2, 3, 4, 5];
    this.set('array', array);

    await render(hbs`{{array-reverse array}}`);
    assert.equal(this.element.textContent.trim(), '5,4,3,2,1');
  });
});
