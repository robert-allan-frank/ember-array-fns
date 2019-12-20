import { helper } from '@ember/component/helper';

/**
 * Locate first index of element in array.
 *
 * @public
 * @function arrayIndexOf
 * @param {Object[]} array The array.
 * @param {string} element The element to locate.
 * @returns {number} Zero based index of first item if found else -1.
 */
export function arrayIndexOf([array, element]) {
  if (Array.isArray(array)) {
    return array.indexOf(element);
  }

  return -1;
}

export default helper(arrayIndexOf);
