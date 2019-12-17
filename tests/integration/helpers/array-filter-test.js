import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Helper | array-filter', function(hooks) {
  setupRenderingTest(hooks);

  test('can filter an array and return an array of four', async function(assert) {
    const fn = item => item === 'a';
    const array = ['a', 'a', 'b', 'a', 'a'];
    this.set('array', array);
    this.set('fn', fn);

    await render(hbs`{{array-filter array fn}}`);
    assert.equal(this.element.textContent.trim(), 'a,a,a,a');
  });

  test('can filter an array and return an array of one', async function(assert) {
    const fn = item => item === 'c';
    const array = ['a', 'b', 'c', 'd', 'e'];
    this.set('array', array);
    this.set('fn', fn);

    await render(hbs`{{array-filter array fn}}`);
    assert.equal(this.element.textContent.trim(), 'c');
  });

  test('can fail gracefully with non-array', async function(assert) {
    const fn = item => item === 'a';
    const nonArray = 'a';
    this.set('array', nonArray);
    this.set('fn', fn);

    await render(hbs`{{array-filter array fn}}`);
    assert.equal(this.element.textContent.trim(), '');
  });
});
