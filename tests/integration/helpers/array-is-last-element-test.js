import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Helper | array-is-last-element', function(hooks) {
  setupRenderingTest(hooks);

  test('can find last element', async function(assert) {
    const array = ['e', 'm', 'b', 'e', 'r'];
    this.set('array', array);
    await render(hbs`{{array-is-last-element array 'r'}}`);
    assert.equal(this.element.textContent.trim(), 'true');
  });

  test('can not find last element', async function(assert) {
    const array = ['e', 'm', 'b', 'e', 'r'];
    this.set('array', array);
    await render(hbs`{{array-is-last-element array 'b'}}`);
    assert.equal(this.element.textContent.trim(), 'false');
  });
});
