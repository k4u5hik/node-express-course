const _ = require('lodash');

// const items = [1,[2,3,[4,5,6,[7,8,9]]],10];
// const newItems = _.flattenDeep(items);
// console.log(newItems);

const chunk1 = _.chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]
console.log(chunk1);
 
const chunk2 = _.chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]
console.log(chunk2);

const compact = _.compact([0, 1, false, 2, '', 3]);
// => [1, 2, 3]
console.log(compact);

const difference = _.difference([3, 2, 1], [2, 3]);
// => [1]
console.log(difference);

const differenceBy = _.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
// => [1.2]
console.log(differenceBy);

const drop1 = _.drop([1, 2, 3]);
// => [2, 3]
console.log(drop1);
 
const drop2 = _.drop([1, 2, 3], 2);
// => [3]
console.log(drop2);
 
const drop3 = _.drop([1, 2, 3], 5);
// => []
console.log(drop3);
 
const drop4 = _.drop([1, 2, 3], 0);
// => [1, 2, 3]
console.log(drop4);

_.defer(function(stamp) {
    console.log(_.now() - stamp);
  }, _.now());
  // => Logs the number of milliseconds it took for the deferred invocation.

const timestamp = _.now();
console.log(timestamp);

const isDate = _.isDate(new Date());
console.log(isDate);