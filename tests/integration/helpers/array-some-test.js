import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Helper | array-some', function(hooks) {
  setupRenderingTest(hooks);

  test('can find item with some', async function(assert) {
    const fn = item => item === 'a';
    const array = ['a', 'b', 'c', 'd', 'e'];
    this.set('array', array);
    this.set('fn', fn);

    await render(hbs`{{array-some array fn}}`);
    assert.equal(this.element.textContent.trim(), 'true');
  });

  test('can not find item with some', async function(assert) {
    const fn = item => item === 'z';
    const array = ['a', 'b', 'c', 'd', 'e'];
    this.set('array', array);
    this.set('fn', fn);

    await render(hbs`{{array-some array fn}}`);
    assert.equal(this.element.textContent.trim(), 'false');
  });

  test('can fail gracefully with non-array', async function(assert) {
    const fn = item => item === 'a';
    const array = 'a';
    this.set('array', array);
    this.set('fn', fn);

    await render(hbs`{{array-some array fn}}`);
    assert.equal(this.element.textContent.trim(), 'false');
  });
});
