import { helper } from '@ember/component/helper';

/**
 * Join an array by a string delimiter.
 *
 * @public
 * @function arrayJoin
 * @param {Object[]} array The array.
 * @param {string} delimiter The string join delimiter.
 * @returns {string} The joined string.
 */
export function arrayJoin([array, delimiter]) {
  if (Array.isArray(array)) {
    return array.join(delimiter);
  }

  return '';
}

export default helper(arrayJoin);
