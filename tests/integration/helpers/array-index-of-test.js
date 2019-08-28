import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Helper | array-index-of', function(hooks) {
  setupRenderingTest(hooks);

  test('can find index of item', async function(assert) {
    const array = ['a', 'a', 'a', 'a', 'a'];
    this.set('array', array);

    await render(hbs`{{array-index-of array 'a'}}`);
    assert.equal(this.element.textContent.trim(), '0');
  });

  test('can not find index of item', async function(assert) {
    const array = ['a', 'b', 'c', 'd', 'e'];
    this.set('array', array);

    await render(hbs`{{array-index-of array 'z'}}`);
    assert.equal(this.element.textContent.trim(), -1);
  });
});
