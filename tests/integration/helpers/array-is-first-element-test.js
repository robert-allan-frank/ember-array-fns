import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Helper | array-is-first-element', function(hooks) {
  setupRenderingTest(hooks);

  test('can find first element', async function(assert) {
    const array = ['e', 'm', 'b', 'e', 'r'];
    this.set('array', array);
    await render(hbs`{{array-is-first-element array 'e'}}`);
    assert.equal(this.element.textContent.trim(), 'true');
  });

  test('can not find first element', async function(assert) {
    const array = ['e', 'm', 'b', 'e', 'r'];
    this.set('array', array);
    await render(hbs`{{array-is-first-element array 'b'}}`);
    assert.equal(this.element.textContent.trim(), 'false');
  });
});
