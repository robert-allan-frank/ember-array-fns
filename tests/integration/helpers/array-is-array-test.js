import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Helper | array-is-array', function(hooks) {
  setupRenderingTest(hooks);

  test('can find array', async function(assert) {
    const array = ['e', 'm', 'b', 'e', 'r'];
    this.set('array', array);
    await render(hbs`{{array-is-array array}}`);
    assert.equal(this.element.textContent.trim(), 'true');
  });

  test('can not find array', async function(assert) {
    const notArray = 'ember';
    this.set('notArray', notArray);
    await render(hbs`{{array-is-array notArray}}`);
    assert.equal(this.element.textContent.trim(), 'false');
  });
});
