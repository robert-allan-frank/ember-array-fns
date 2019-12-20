import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Helper | array-find', function(hooks) {
  setupRenderingTest(hooks);

  test('can find an element within the array', async function(assert) {
    const fn = item => item === 'a';
    const array = ['a', 'b', 'c', 'd', 'e'];
    this.set('array', array);
    this.set('fn', fn);

    await render(hbs`{{array-find array fn}}`);
    assert.equal(this.element.textContent.trim(), 'a');
  });

  test('can not find an element within an array', async function(assert) {
    const fn = item => item === 'z';
    const array = ['a', 'b', 'c', 'd', 'e'];
    this.set('array', array);
    this.set('fn', fn);

    await render(hbs`{{array-find array fn}}`);
    assert.equal(this.element.textContent.trim(), '');
  });

  test('can fail gracefully with non-array', async function(assert) {
    const fn = item => item === 'a';
    const nonArray = 'a';
    this.set('array', nonArray);
    this.set('fn', fn);

    await render(hbs`{{array-find array fn}}`);
    assert.equal(this.element.textContent.trim(), '');
  });
});
