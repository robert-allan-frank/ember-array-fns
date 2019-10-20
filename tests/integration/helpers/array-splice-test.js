import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Helper | array-splice', function(hooks) {
  setupRenderingTest(hooks);

  test('can splice an array', async function(assert) {
    const array = ['January', 'March', 'April', 'June'];
    this.set('array', array);

    await render(hbs`{{array-splice array 1 0 'February'}}`);
    assert.equal(this.element.textContent.trim(), 'January,February,March,April,June');
  });

  test('can ensure delete count is provided', async function(assert) {
    const array = ['January', 'March', 'April', 'June'];
    this.set('array', array);

    await render(hbs`{{array-splice array}}`);
    assert.equal(this.element.textContent.trim(), '');
  });

  test('can splice elements with a deleted value', async function(assert) {
    const array = ['January', 'February', 'March'];
    this.set('array', array);

    await render(hbs`{{array-splice array 1 1}}`);
    assert.equal(this.element.textContent.trim(), 'January,March');
  });
});
