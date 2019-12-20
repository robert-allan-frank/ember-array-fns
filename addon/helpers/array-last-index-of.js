import { helper } from '@ember/component/helper';

/**
 * Locate last index of element in array.
 *
 * @public
 * @function arrayLastIndexOf
 * @param {Object[]} array The array.
 * @param {string} element The element to locate.
 * @returns {number} Zero based index of last item if found else -1.
 */
export function arrayLastIndexOf([array, element]) {
  if (Array.isArray(array)) {
    return array.lastIndexOf(element);
  }

  return -1;
}

export default helper(arrayLastIndexOf);
