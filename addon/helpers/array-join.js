import { helper } from '@ember/component/helper';

/**
 * Join an array by a string delimiter.
 *
 * @public
 * @param {Object[]} The array.
 * @param {string} delimiter The string join delimiter.
 * @returns {string} The joined string.
 */
export function arrayJoin([array, delimiter]) {
  return array.join(delimiter);
}

export default helper(arrayJoin);
