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
  let result;

  if (Array.isArray(array)) {
    if (deleteCount === undefined) {
      result = array.splice(deleteCount);
    } else if (elements.length === 0) {
      result = array.splice(beginIndex, deleteCount);
    } else {
      result = array.splice(beginIndex, deleteCount, ...elements);
    }
  } else {
    result = [];
  }

  return result;
}

export default helper(arraySplice);
