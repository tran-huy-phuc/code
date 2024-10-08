const number = Number('200');
console.log(number); // 200

const numberForNull = Number(null);
console.log(numberForNull); // 0

const numberForUndefined = Number(undefined);
console.log(numberForUndefined); // NaN

const numberForNaN = Number(NaN);
console.log(numberForNaN); // NaN

const numberForBoolean = Number(true);
console.log(numberForBoolean);

const numberForObject = Number({});
console.log(numberForObject); // NaN

const numberForArray = Number([]);
console.log(numberForArray); // 0

const numberForArrayWithOneElement = Number([100]);
console.log(numberForArrayWithOneElement); // 100

const numberForArrayMultipleElements = Number([100, 200, 300]);
console.log(numberForArrayMultipleElements); // NaN