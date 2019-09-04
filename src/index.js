import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

console.log(`Question 1 - Derek Austin
Print the number of integers in an array that are above the
given input and the number that are below, e.g. for the array
[1, 5, 2, 1, 10] with input 6, print "above: 1, below: 4"`);

const array = [1, 5, 2, 1, 10];
const inputThreshold = 6;
// Implementation using reduce
const aboveAndBelow = (array, inputThreshold) => {
  const above = array.reduce(
    (accumulator, currentValue) =>
      currentValue > inputThreshold ? (accumulator += 1) : accumulator,
    0
  );
  const below = array.reduce(
    (accumulator, currentValue) =>
      currentValue < inputThreshold ? (accumulator += 1) : accumulator,
    0
  );
  return `above: ${above}, below: ${below}`;
};

console.log(`*** Implementation using reduce ***
aboveAndBelow([${array}], ${inputThreshold})
Result: "${aboveAndBelow(array, inputThreshold)}"`);
// Result: "above: 1, below: 4"

const aboveAndBelowMap = (array, inputThreshold) => {
  const accumulator = { above: 0, below: 0 };
  // Alternative implementation: Using map
  array.map(value => {
    if (value > inputThreshold) {
      accumulator.above += 1;
    } else if (value < inputThreshold) {
      accumulator.below += 1;
    }
  });
  return `above: ${accumulator.above}, below: ${accumulator.below}`;
};
console.log(`*** Implementation using reduce ***
aboveAndBelowMap([${array}], ${inputThreshold})
Result: "${aboveAndBelowMap(array, inputThreshold)}"`);
// Result: "above: 1, below: 4"

// Alternative implementation: Using for loop
const aboveAndBelowForEach = (array, inputThreshold) => {
  let aboveThreshold = 0;
  let belowThreshold = 0;
  let i = 0;
  for (i = 0; i < array.length; i++) {
    let value = array[i];
    if (value > inputThreshold) {
      aboveThreshold += 1;
    } else if (value < inputThreshold) {
      belowThreshold += 1;
    }
  }
  return `above: ${aboveThreshold}, below: ${belowThreshold}`;
};
console.log(`*** Implementation using reduce ***
aboveAndBelowForEach([${array}], ${inputThreshold})
Result: "${aboveAndBelowForEach(array, inputThreshold)}"`);
// Result: "above: 1, below: 4"

// Unit test:
console.log(`*** Unit test ***`);
const unitTest = () => {
  const story = `Count numbers above and below 6 in [1, 5, 2, 1, 10]`;
  const expectation = "above: 1, below: 4";
  const output = aboveAndBelow([1, 5, 2, 1, 10], 6);
  const result = output === expectation ? "✓PASS" : "✗FAIL";
  console.log(
    `Test: ${result} ${story}
            ${output} should match ${expectation}`
  );
};
unitTest(array, inputThreshold);

console.log(`Question 2 - Derek Austin
Rotate the characters in a string by a given input and have the overflow
appear at the beginning, e.g. “MyString” rotated by 2 is “ngMyStri”.`);

const rotateString = (inputString = "", howManyCharacters = 0) => {
  // Optional type checking:
  // if (inputString == null || typeof inputString !== "string") return "";
  const length = inputString.length;
  const overflow = inputString.substring(howManyCharacters, length);
  const remainder = inputString.substring(0, howManyCharacters);
  const rotatedString = overflow + remainder;
  return rotatedString;
};
console.log(`*** Basic function ***
rotateString("MyString", 3)
Result: "${rotateString("MyString", 3)}"`);
// Result "tringMyS"

// Condensed, with type coercion to string:
const rotateStringCoercion = (inputString = "", howManyCharacters = 0) => {
  inputString += "";
  return (
    inputString.substring(howManyCharacters, inputString.length) +
    inputString.substring(0, howManyCharacters)
  );
};
console.log(`*** Condensed function, with type coercion ***
rotateStringCoercion("MyString", 3)
Result: "${rotateStringCoercion("MyString", 3)}"
rotateStringCoercion(3)
Result: "${rotateStringCoercion(3)}"`);
// Results: "tringMyS" and "3"

// One line with type checking:
const rotateStringOneLine = (inputString = "", howManyCharacters = 0) =>
  inputString == null || typeof inputString !== "string"
    ? ""
    : inputString.substring(howManyCharacters, inputString.length) +
      inputString.substring(0, howManyCharacters);
console.log(`*** One line function, with type checking ***
rotateStringOneLine("MyString", 3)
Result: "${rotateStringOneLine("MyString", 3)}"
rotateStringOneLine(3)
Result: "${rotateStringOneLine(3)}"`);
// Results: "tringMyS" and ""

// Unit test:
console.log(`*** Unit test ***`);
const story = `Rotate string by 2 characters`;
const input = "MyString";
const expectation = "StringMy";
const output = rotateString(input, 2);
const result = output === expectation ? "✓PASS" : "✗FAIL";
console.log(`Test: ${result} ${story}
            ${output} should match ${expectation}`);

// Expanded unit test:
console.log(`*** Expanded unit tests ***`);
const possibleRotations = Array.from(Array(input.length + 1).keys()); // Generate array of possible rotations up to input's length
const expectations = [
  "MyString",
  "yStringM",
  "StringMy",
  "tringMyS",
  "ringMySt",
  "ingMyStr",
  "ngMyStri",
  "gMyStrin",
  "MyString"
];
possibleRotations.map(howFar => {
  const story = `Rotate string by ${howFar} characters`;
  const input = "MyString";
  const output = rotateString(input, howFar);
  const result = output === expectations[howFar] ? "✓PASS" : "✗FAIL";
  console.log(
    `Test: ${result} ${story}: ${output} should match ${expectations[howFar]}`
  );
});

console.log(`Question 3 - Derek Austin
If you could change 1 thing about your favorite
framework/language/platform (pick one), what would it be?`);

console.log(`I have a personal preference (probably from Ruby) against semicolons,
so I would love for JavaScript developers to agree: let’s stop using
semicolons and update our prettier configs. -Derek 😁`);
