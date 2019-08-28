import { helper } from '@ember/component/helper';

/**
 * Perform reverse of array.
 *
 * @public
 * @param {Object[]} The array.
 * @returns {Object[]} The reversed array.
 */
export function arrayReverse([array]) {
  return array.reverse();
}

export default helper(arrayReverse);
