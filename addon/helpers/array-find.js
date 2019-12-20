import { helper } from '@ember/component/helper';

/**
 * Perform find of array by function.
 *
 * @public
 * @function arrayFind
 * @param {Object[]} array The array.
 * @param {Function} fn The comparison function.
 * @returns {Object} The found element else undefined.
 */
export function arrayFind([array, fn]) {
  if (Array.isArray(array)) {
    return array.find(fn);
  }

  return undefined;
}

export default helper(arrayFind);
