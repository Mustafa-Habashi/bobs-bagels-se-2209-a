const { assertEquals } = require('../../testing-framework');
const Basket = require('../src/basket')


let expected;
let actual;
let result;



// Test 1 is anything added to the basket?


console.log(`==================`)
console.log(`Test 1 - add puts something into the basket`)

// Arrange
basket = new Basket();
item = { id: 'item1' }
expected = 1;

// Act
basket.add(item)
actual = basket.basketItems.length


// Assert
result = assertEquals(actual, expected)
console.log(`Test 1: Something added to basket: ${result}`)

// Cleanup

basket = null;
item = null;
expected = undefined;
actual = undefined;
result = undefined;



// console.log(`==================`)
// console.log(`Test 2 - removes something from the basket`)

// // Arrange
// basket = new Basket();
// expected = 1;

// // Act
// basket.add({ id: 'item1' })
// basket.add({ id: 'item2' })
// basket.remove()
// actual = basket.basketItems.length


// // Assert
// result = assertEquals(actual, expected)
// console.log(`Test 2: Something removed from basket basket: ${result}`)

// // Cleanup

// basket = null;
// item = null;
// expected = undefined;
// actual = undefined;
// result = undefined;

