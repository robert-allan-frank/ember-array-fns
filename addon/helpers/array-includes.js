import { helper } from '@ember/component/helper';

/**
 * Determine if item is in array.
 *
 * @public
 * @function arrayIncludes
 * @param {Object[]} array The array.
 * @param {string} element The element to locate.
 * @returns {boolean} True if element is found in array.
 */
export function arrayIncludes([array, element]) {
  if (Array.isArray(array)) {
    return array.includes(element);
  }

  return false;
}

export default helper(arrayIncludes);
