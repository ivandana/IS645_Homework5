const arrays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const oddNumber = arrays.filter(number => number % 2 !== 0);
const divisibleBy2Or5 = arrays.filter(number => (number % 2 === 0) || (number % 5 === 0));
const squaredOfNumberDivisibleBy3 = arrays.filter(number => number % 3 === 0).map(number => (number * number));
const sum = arrays.filter(number => number % 5 === 0).map(number => (number * number)).reduce((acc, value) => acc + value);

console.log(`An array of odd numbers: ${oddNumber}`);
console.log(`An array of numbers divisible by 2 or 5: ${divisibleBy2Or5}`);
console.log(`An array of numbers divisible by 3 squared: ${squaredOfNumberDivisibleBy3}`);
console.log(`The sum of the number divisible by 5, then squared and their sum: ${sum}`);