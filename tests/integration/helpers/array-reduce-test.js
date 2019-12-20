import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Helper | array-map', function(hooks) {
  setupRenderingTest(hooks);

  test('can map an array into another array', async function(assert) {
    const fn = (accumulator, item) => {
      accumulator += item;
      return accumulator;
    };
    const accumulator = 0;
    const array = [1, 2, 3, 4, 5];
    this.set('array', array);
    this.set('fn', fn);
    this.set('accumulator', accumulator);

    await render(hbs`{{array-reduce array fn accumulator}}`);
    assert.equal(this.element.textContent.trim(), '15');
  });

  test('can fail gracefully with non-array', async function(assert) {
    const fn = (accumulator, item) => {
      accumulator += item;
      return accumulator;
    };
    const accumulator = 0;
    const nonArray = 'a';
    this.set('array', nonArray);
    this.set('fn', fn);
    this.set('accumulator', accumulator);

    await render(hbs`{{array-reduce array fn accumulator}}`);
    assert.equal(this.element.textContent.trim(), '');
  });
});
