import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Helper | array-reverse', function(hooks) {
  setupRenderingTest(hooks);

  test('can reverse an array', async function(assert) {
    const fn = (left, right) => left - right;
    const array = [5, 3, 1, 4, 2];
    this.set('array', array);
    this.set('fn', fn);

    await render(hbs`{{array-sort array fn}}`);
    assert.equal(this.element.textContent.trim(), '1,2,3,4,5');
  });
});
