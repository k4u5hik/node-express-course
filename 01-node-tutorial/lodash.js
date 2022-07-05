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

