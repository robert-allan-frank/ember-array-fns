import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Helper | array-map', function(hooks) {
  setupRenderingTest(hooks);

  test('can map an array into another array', async function(assert) {
    const fn = item => item.value;
    const array = [
      {
        id: 1,
        value: 'a'
      },
      {
        id: 2,
        value: 'b'
      },
      {
        id: 3,
        value: 'c'
      },
      {
        id: 4,
        value: 'd'
      },
      {
        id: 5,
        value: 'e'
      }
    ];
    this.set('array', array);
    this.set('fn', fn);

    await render(hbs`{{array-map array fn}}`);
    assert.equal(this.element.textContent.trim(), 'a,b,c,d,e');
  });

  test('can fail gracefully with non-array', async function(assert) {
    const fn = item => item.value;
    const nonArray = 'a';
    this.set('array', nonArray);
    this.set('fn', fn);

    await render(hbs`{{array-map array fn}}`);
    assert.equal(this.element.textContent.trim(), '');
  });
});
