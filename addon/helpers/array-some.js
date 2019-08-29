import { helper } from '@ember/component/helper';

/**
 * Perform some of array by function.
 *
 * @public
 * @function arraySome
 * @param {Object[]} array The array.
 * @param {Function} fn The comparison function.
 * @returns {boolean} True if at least one match is found.
 */
export function arraySome([array, fn]) {
  return array.some(fn);
}

export default helper(arraySome);
