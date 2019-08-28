import { helper } from '@ember/component/helper';

/**
 * Perform slice of array.
 *
 * @public
 * @param {Object[]} The array.
 * @param {number} The beginning index.
 * @param {number} The optional end index.
 * @returns {Object[]} The sliced array.
 */
export function arraySlice([array, beginIndex, endIndex]) {
  let result;

  if (endIndex === undefined) {
    result = array.slice(beginIndex);
  } else {
    result = array.slice(beginIndex, endIndex);
  }

  return result;
}

export default helper(arraySlice);
