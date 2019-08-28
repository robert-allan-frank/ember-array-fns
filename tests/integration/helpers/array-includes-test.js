import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Helper | array-includes', function(hooks) {
  setupRenderingTest(hooks);

  test('can find items with includes', async function(assert) {
    const array = ['a', 'a', 'a', 'a', 'a'];
    this.set('array', array);

    await render(hbs`{{array-includes array 'a'}}`);
    assert.equal(this.element.textContent.trim(), 'true');
  });

  test('can not find items with includes', async function(assert) {
    const array = ['a', 'b', 'c', 'd', 'e'];
    this.set('array', array);

    await render(hbs`{{array-includes array 'z'}}`);
    assert.equal(this.element.textContent.trim(), 'false');
  });
});
