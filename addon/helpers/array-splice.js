import { helper } from '@ember/component/helper';

/**
 * Perform splice of array.
 *
 * @public
 * @param {Object[]} The array.
 * @param {number} The beginning index.
 * @param {number} The delete count.
 * @param {Object[]} The optional elements
 * @returns {Object[]} The spliced array.
 */
export function arraySplice([array, beginIndex, deleteCount, ...elements]) {
  if (deleteCount === undefined) {
    array.splice(deleteCount);
  } else if (elements.length === 0) {
    array.splice(beginIndex, deleteCount);
  } else {
    array.splice(beginIndex, deleteCount, ...elements);
  }

  return array;
}

export default helper(arraySplice);
