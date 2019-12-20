import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Helper | array-find-index', function(hooks) {
  setupRenderingTest(hooks);

  test('can find an index of an element within the array', async function(assert) {
    const fn = item => item === 'a';
    const array = ['a', 'b', 'c', 'd', 'e'];
    this.set('array', array);
    this.set('fn', fn);

    await render(hbs`{{array-find-index array fn}}`);
    assert.equal(this.element.textContent.trim(), '0');
  });

  test('can not find an index of an element within an array', async function(assert) {
    const fn = item => item === 'z';
    const array = ['a', 'b', 'c', 'd', 'e'];
    this.set('array', array);
    this.set('fn', fn);

    await render(hbs`{{array-find-index array fn}}`);
    assert.equal(this.element.textContent.trim(), '-1');
  });

  test('can fail gracefully with non-array', async function(assert) {
    const fn = item => item === 'a';
    const nonArray = 'a';
    this.set('array', nonArray);
    this.set('fn', fn);

    await render(hbs`{{array-find-index array fn}}`);
    assert.equal(this.element.textContent.trim(), '-1');
  });
});
