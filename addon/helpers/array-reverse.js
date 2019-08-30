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
  return array.reverse();
}

export default helper(arrayReverse);
