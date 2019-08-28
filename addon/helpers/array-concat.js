import { helper } from '@ember/component/helper';

/**
 * Perform concat of two or more arrays.
 *
 * @public
 * @param {Object[]} The array.
 * @returns {Object[]} The concatenated array.
 */
export function arrayConcat([...arrays]) {
  return arrays.reduce((accumulator, array) => {
    return accumulator.concat(array);
  }, []);
}

export default helper(arrayConcat);
