import { helper } from '@ember/component/helper';

/**
 * Perform concatenation of two or more arrays.
 *
 * @public
 * @function arrayConcat
 * @param {...Object[]} arrays The arrays.
 * @returns {Object[]} The concatenated array.
 */
export function arrayConcat([...arrays]) {
  return arrays.reduce((accumulator, array) => {
    if (Array.isArray(array)) {
      return accumulator.concat(array);
    } else {
      return accumulator;
    }
  }, []);
}

export default helper(arrayConcat);
