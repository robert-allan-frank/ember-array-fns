import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Helper | array-join', function(hooks) {
  setupRenderingTest(hooks);

  test('can joinenate arrays', async function(assert) {
    const array = ['a', 'b', 'c', 'd', 'e'];

    this.set('array', array);
    await render(hbs`{{array-join array '-'}}`);
    assert.equal(this.element.textContent.trim(), 'a-b-c-d-e');
  });

  test('can fail gracefully with non-array', async function(assert) {
    const nonArray = 'a';
    this.set('array', nonArray);

    await render(hbs`{{array-join array '-'}}`);
    assert.equal(this.element.textContent.trim(), '');
  });
});
