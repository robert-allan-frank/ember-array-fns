ember-array-fns
==============================================================================
This addon provides array helpers for Ember templates and components.

To install:

```sh
ember install ember-array-fns
```

Usage
------------------------------------------------------------------------------
* [`array-concat`](#array-concat)
* [`array-every`](#array-every)
* [`array-filter`](#array-filter)
* [`array-find`](#array-find)
* [`array-find-index`](#array-find-index)
* [`array-includes`](#array-includes)
* [`array-index-of`](#array-index-of)
* [`array-is-first-element`](#array-is-first-element)
* [`array-is-last-element`](#array-is-last-element)
* [`array-join`](#array-join)
* [`array-last-index-of`](#array-last-index-of)
* [`array-map`](#array-map)
* [`array-reduce`](#array-reduce)
* [`array-reverse`](#array-reverse)
* [`array-slice`](#array-slice)
* [`array-some`](#array-some)
* [`array-sort`](#array-sort)
* [`array-splice`](#array-splice)

#### `array-concat`
Perform concat of two or more arrays. See [Array.concat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat) for details on the Array.concat function.


```hbs
{{array-concat array1 array2 array3}}
```

#### `array-every`
Perform every of array by function. See [Array.every()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every) for details on the Array.every function.

```hbs
{{array-every array fn}}
```

#### `array-filter`
Perform filter of array by function. See [Array.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) for details on the Array.filter function.

```hbs
{{array-filter array fn}}
```

#### `array-find`
Perform find of array by function. See [Array.find()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find) for details on the Array.find function.

```hbs
{{array-find array fn}}
```

#### `array-findIndex`
Perform find of array by function returning the index of the found element. See [Array.findIndex()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex) for details on the Array.findIndex function.

```hbs
{{array-find-index array fn}}
```

#### `array-includes`
Determine if item is in array. See [Array.includes()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes) for details on the Array.includes function.

```hbs
{{array-includes array 'a'}}
```

#### `array-indexOf`
Locate first index of element in array. See [Array.indexOf()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) for details on the Array.indexOf function.

```hbs
{{array-index-of array 'a'}}
```

#### `array-is-first-element`
Returns true if element is first within the array.

```hbs
{{array-is-first-element array element}}
```

#### `array-is-last-element`
Returns true if element is last within the array.

```hbs
{{array-is-last-element array element}}
```

#### `array-join`
Join an array by a string delimiter. See [Array.join()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join) for details on the Array.join function.

```hbs
{{array-join array '-'}}
```

#### `array-lastIndexOf`
Locate last index of element in array. See [Array.lastIndexOf()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf) for details on the Array.lastIndexOf function.

```hbs
{{array-last-index-of array 'a'}}
```

#### `array-map`
Perform map of array by function. See [Array.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) for details on the Array.map function.

```hbs
{{array-map array fn}}
```

#### `array-reduce`
Perform reduce of array by function. See [Array.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) for details on the Array.reduce function.

```hbs
{{array-reduce array fn accumulator}}
```

#### `array-reverse`
Perform reverse of array. See [Array.reverse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse) for details on the Array.reverse function.

```hbs
{{array-reverse array}}
```

#### `array-slice`
Perform slice of array. See [Array.slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) for details on the Array.slice function.

```hbs
{{array-slice array 2 4}}
```

#### `array-some`
Perform some of array by function. See [Array.some()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some) for details on the Array.some function.

```hbs
{{array-some array fn}}
```

#### `array-sort`
Perform sort of array by function. See [Array.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) for details on the Array.sort function.

```hbs
{{array-sort array fn}}
```

#### `array-splice`
Perform splice of array. See [Array.splice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) for details on the Array.splice function.

```hbs
{{array-splice array 1 0 'February'}}
```

Compatibility
------------------------------------------------------------------------------
* Ember.js v3.4 or above
* Ember CLI v2.13 or above
* Node.js v8 or above


Contributing
------------------------------------------------------------------------------
See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------
This project is licensed under the [MIT License](LICENSE.md).
