import { helper } from '@ember/component/helper';

/**
 * Perform map of array by function.
 *
 * @public
 * @function arrayMap
 * @param {Object[]} array The array.
 * @param {Function} fn The comparison function.
 * @returns {Object[]} The new array of mapped elements.
 */
export function arrayMap([array, fn]) {
  if (Array.isArray(array)) {
    return array.map(fn);
  }

  return [];
}

export default helper(arrayMap);
