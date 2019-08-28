import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Helper | array-slice', function(hooks) {
  setupRenderingTest(hooks);

  test('can slice an array', async function(assert) {
    const array = [1, 2, 3, 4, 5];
    this.set('array', array);

    await render(hbs`{{array-slice array 2}}`);
    assert.equal(this.element.textContent.trim(), '3,4,5');
  });

  test('can slice an array including end index', async function(assert) {
    const array = [1, 2, 3, 4, 5];
    this.set('array', array);

    await render(hbs`{{array-slice array 2 4}}`);
    assert.equal(this.element.textContent.trim(), '3,4');
  });
});
