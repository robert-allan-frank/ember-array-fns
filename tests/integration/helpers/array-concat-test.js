import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Helper | array-concat', function(hooks) {
  setupRenderingTest(hooks);

  test('can concatenate arrays', async function(assert) {
    const array1 = ['a', 'b', 'c', 'd', 'e'];
    const array2 = ['f', 'g', 'h', 'i', 'j'];
    const array3 = ['k', 'l', 'm', 'n', 'o'];

    this.set('array1', array1);
    this.set('array2', array2);
    this.set('array3', array3);

    await render(hbs`{{array-concat array1 array2 array3}}`);
    assert.equal(this.element.textContent.trim(), 'a,b,c,d,e,f,g,h,i,j,k,l,m,n,o');
  });
});
