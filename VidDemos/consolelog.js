const count = 5;
console.log('count: %d', count);
// Prints: count: 5, to the console
console.log('count:', count, 5, 'test');
// Prints: count: 5, to stdout

console.table([{ a: 1, b: 'Y' }, {a: 'Z', b: 2 }]);
// ┌─────────┬─────┬─────┐
// │ (index) │  a  │  b  │
// ├─────────┼─────┼─────┤
// │    0    │  1  │ 'Y' │
// │    1    │ 'Z' │  2  │
// └─────────┴─────┴─────┘