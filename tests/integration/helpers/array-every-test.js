import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Helper | array-every', function(hooks) {
  setupRenderingTest(hooks);

  test('can find items with every', async function(assert) {
    const fn = item => item === 'a';
    const array = ['a', 'a', 'a', 'a', 'a'];
    this.set('array', array);
    this.set('fn', fn);

    await render(hbs`{{array-every array fn}}`);
    assert.equal(this.element.textContent.trim(), 'true');
  });

  test('can not find items with every', async function(assert) {
    const fn = item => item === 'c';
    const array = ['a', 'b', 'c', 'd', 'e'];
    this.set('array', array);
    this.set('fn', fn);

    await render(hbs`{{array-every array fn}}`);
    assert.equal(this.element.textContent.trim(), 'false');
  });
});
