import { helper } from '@ember/component/helper';

/**
 * Perform slice of array.
 *
 * @public
 * @function arraySlice
 * @param {Object[]} array The array.
 * @param {number} beginIndex The beginning index.
 * @param {number} endIndex The optional end index.
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
