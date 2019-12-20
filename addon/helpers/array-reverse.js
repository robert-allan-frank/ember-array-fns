import { helper } from '@ember/component/helper';

/**
 * Perform reverse of array.
 *
 * @public
 * @function arrayReverse
 * @param {Object[]} array The array.
 * @returns {Object[]} The reversed array.
 */
export function arrayReverse([array]) {
  if (Array.isArray(array)) {
    return array.reverse();
  }

  return [];
}

export default helper(arrayReverse);
