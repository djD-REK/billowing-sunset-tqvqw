import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello RTS Labs!</h1>
<p>
  Thanks for the opportunity to interview!
</p>
<h4>Best regards,<br/>Derek</h4>
`;

/**
 * Question 1 - Derek Austin
 * Print the number of integers in an array that are above the
 * given input and the number that are below, e.g. for the array
 * [1, 5, 2, 1, 10] with input 6, print "above: 1, below: 4"`);
 */

console.log(`/**
* Question 1 - Derek Austin
* Print the number of integers in an array that are above the
* given input and the number that are below, e.g. for the array
* [1, 5, 2, 1, 10] with input 6, print "above: 1, below: 4"
*/`);

const array = [1, 5, 2, 1, 10];
const inputThreshold = 6;
/**
 * Returns a string in the format "above: #, below: #"
 * based on the number of integers in an array that
 * are above and below the given input threshold
 * @param  {Array}  array          The array of integers
 * @param  {Number} inputThreshold The input threshold
 * @return {String}                The counts above and below
 * (Version 1/3: Implementation using reduce)
 */
const aboveAndBelow = (array, inputThreshold) => {
  // Count the number of integers above the threshold using reduce to check each element
  const above = array.reduce(
    (accumulator, currentValue) =>
      // Add 1 to the accumulator if the value is above the input threshold
      currentValue > inputThreshold ? (accumulator += 1) : accumulator,
    0
  );
  // Count the number of integers below the threshold using reduce to check each element
  const below = array.reduce(
    (accumulator, currentValue) =>
      // Add 1 to the accumulator if the value is below the input threshold
      currentValue < inputThreshold ? (accumulator += 1) : accumulator,
    0
  );
  return `above: ${above}, below: ${below}`;
};

console.log(`*** Implementation using reduce ***
aboveAndBelow([${array}], ${inputThreshold})
Result: "${aboveAndBelow(array, inputThreshold)}"`);
// Result: "above: 1, below: 4"

/**
 * Returns a string in the format "above: #, below: #"
 * based on the number of integers in an array that
 * are above and below the given input threshold
 * @param  {Array}  array          The array of integers
 * @param  {Number} inputThreshold The input threshold
 * @return {String}                The counts above and below
 * (Version 2/3: Implementation using map)
 */
const aboveAndBelowMap = (array, inputThreshold) => {
  // Create an accumulator object to keep our counts
  const accumulator = { above: 0, below: 0 };
  // Count the number of integers above and below the threshold using map to check each value
  array.map(value => {
    if (value > inputThreshold) {
      // Add 1 to the accumulator if the value is above the input threshold
      accumulator.above += 1;
    } else if (value < inputThreshold) {
      // Add 1 to the accumulator if the value is below the input threshold
      accumulator.below += 1;
    }
  });
  return `above: ${accumulator.above}, below: ${accumulator.below}`;
};
console.log(`*** Implementation using reduce ***
aboveAndBelowMap([${array}], ${inputThreshold})
Result: "${aboveAndBelowMap(array, inputThreshold)}"`);
// Result: "above: 1, below: 4"

/**
 * Returns a string in the format "above: #, below: #"
 * based on the number of integers in an array that
 * are above and below the given input threshold
 * @param  {Array}  array          The array of integers
 * @param  {Number} inputThreshold The input threshold
 * @return {String}                The counts above and below
 * (Version 3/3: Implementation using for loop)
 */
const aboveAndBelowForLoop = (array, inputThreshold) => {
  // Create our counter variables
  let aboveThreshold = 0;
  let belowThreshold = 0;
  // Iterate over the array using a for loop to count the number of integers above and below the threshold
  for (let i = 0; i < array.length; i++) {
    let value = array[i];
    if (value > inputThreshold) {
      // Add 1 to the accumulator if the value is above the input threshold
      aboveThreshold += 1;
    } else if (value < inputThreshold) {
      // Add 1 to the accumulator if the value is below the input threshold
      belowThreshold += 1;
    }
  }
  return `above: ${aboveThreshold}, below: ${belowThreshold}`;
};
console.log(`*** Implementation using for loop ***
aboveAndBelowForLoop([${array}], ${inputThreshold})
Result: "${aboveAndBelowForLoop(array, inputThreshold)}"`);
// Result: "above: 1, below: 4"

// Unit test:
console.log(`*** Unit test ***`);
(function unitTest() {
  const story = `Count numbers above and below 6 in [1, 5, 2, 1, 10]`;
  const expectation = "above: 1, below: 4";
  const output = aboveAndBelow([1, 5, 2, 1, 10], 6);
  const result = output === expectation ? "✓PASS" : "✗FAIL";
  console.log(
    `Test: ${result} ${story}
            ${output} should match ${expectation}`
  );
})(); // Encapsulated as an IIFE so the function runs automatically

/**
 * Question 2 - Derek Austin
 * Rotate the characters in a string by a given input and
 * have the overflow appear at the beginning, e.g.
 * “MyString” rotated by 2 is “ngMyStri”.`);
 */

console.log(`/**
* Question 2 - Derek Austin
* Rotate the characters in a string by a given input and
* have the overflow appear at the beginning, e.g.
* “MyString” rotated by 2 is “ngMyStri”.
*/`);

/**
 * Returns the input string rotated by the specified
 * number of characters, with the overflow appearing
 * at the beginning.
 * For example, "Hello" rotated by 2 would be "loHel"
 * @param  {Array}  [inputString = ""]      The string to be rotated
 * @param  {Number} [howManyCharacters = 0] How far to rotate
 * @return {String}                         The rotated string
 * (Version 1/3: Longhand implementation, no type checking)
 */
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

/**
 * Returns the input string rotated by the specified
 * number of characters, with the overflow appearing
 * at the beginning.
 * For example, "Hello" rotated by 2 would be "loHel"
 * @param  {Array}  [inputString = ""]      The string to be rotated
 * @param  {Number} [howManyCharacters = 0] How far to rotate
 * @return {String}                         The rotated string
 * (Version 2/3: Condensed, with type coercion)
 */
const rotateStringCoercion = (inputString = "", howManyCharacters = 0) => {
  // Force type coercion to String by using the + operator to add the empty string
  inputString += "";
  // Alternatively, for readability: let definitelyString = String(inputString);
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

/**
 * Returns the input string rotated by the specified
 * number of characters, with the overflow appearing
 * at the beginning.
 * For example, "Hello" rotated by 2 would be "loHel"
 * @param  {Array}  [inputString = ""]      The string to be rotated
 * @param  {Number} [howManyCharacters = 0] How far to rotate
 * @return {String}                         The rotated string
 * (Version 3/3: Condensed to one line, with type checking)
 */
const rotateStringOneLine = (inputString = "", howManyCharacters = 0) =>
  // Check to be sure inputString is not null and is of type string
  inputString == null || typeof inputString !== "string"
    ? "" // Either null or not a string type, so return the empty string
    : inputString.substring(howManyCharacters, inputString.length) +
      inputString.substring(0, howManyCharacters); // Return the rotated string
console.log(`*** One line function, with type checking ***
rotateStringOneLine("MyString", 3)
Result: "${rotateStringOneLine("MyString", 3)}"
rotateStringOneLine(3)
Result: "${rotateStringOneLine(3)}"`);
// Results: "tringMyS" and ""

// Unit test:
const unitTest = () => {
  // Anonymous function assigned to the const unitTest
  console.log(`*** Unit test ***`);
  const story = `Rotate string by 2 characters`;
  const input = "MyString";
  const expectation = "StringMy";
  const output = rotateString(input, 2);
  const result = output === expectation ? "✓PASS" : "✗FAIL";
  console.log(`Test: ${result} ${story}
            ${output} should match ${expectation}`);
};
// Run unit test for rotateString
unitTest();

// Expanded unit tests:
console.log(`*** Expanded unit tests ***`);
const runTestSuite = function generateUnitTests() {
  // Using a named function for maximum code readability
  const input = "MyString";
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
};
// Run test suite for rotateString
runTestSuite();

/**
 * Question 3 - Derek Austin
 * If you could change 1 thing about your favorite
 * framework/language/platform (pick one), what would it be?
 */

console.log(`/**
* Question 3 - Derek Austin
* If you could change 1 thing about your favorite
* framework/language/platform (pick one), what would it be?
*/`);

console.log(`I have a personal preference (probably from Ruby) against
semicolons, so I would love for JavaScript developers to agree:
let’s all stop using semicolons and update our prettier configs.
-Derek 😁`);
