import { helper } from '@ember/component/helper';

/**
 * Perform splice of array.
 *
 * @public
 * @function arraySplice
 * @param {Object[]} array The array.
 * @param {number} beginIndex The beginning index.
 * @param {number} deleteCount The delete count.
 * @param {...Object} elements The optional elements
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
