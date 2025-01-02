class NumberOperations {
  constructor(data) {
    // If the data is a string, split it into numbers
    if (typeof data === "string") {
      this.data = data.split(",").map(Number);  // Converting strings to numbers
    } else {
      this.data = data; // If it's already an array of numbers
    }
  }

  count() {
    // Return the count of numbers
    return this.data.length;
  }

  printNumbers() {
    // Print each number with its index
    this.data.forEach((num, index) => console.log(index, num));
  }

  odds() {
    // Return the odd numbers in the list
    return this.data.filter((num) => num % 2 !== 0);
  }

  evens() {
    // Return the even numbers in the list
    return this.data.filter((num) => num % 2 === 0);
  }

  sum() {
    // Return the sum of all numbers
    return this.data.reduce((acc, num) => acc + num, 0);
  }

  product() {
    // Return the product of all numbers
    return this.data.reduce((acc, num) => acc * num, 1);
  }

  greaterThan(target) {
    // Return the numbers greater than the given target
    return this.data.filter((num) => num > target);
  }

  howMany(target) {
    // Return the count of a specific number in the list
    return this.data.filter((num) => num === target).length;
  }
}

// Create a random string of numbers separated by commas
let randomString = "";
let randomLength = Math.floor(Math.random() * 10) + 1;  // Random length between 1 and 10
for (let i = 0; i < randomLength; i++) {
  randomString += Math.floor(Math.random() * 10) + ",";  // Random number 0-9
}
randomString += Math.floor(Math.random() * 10);  // Add the last number

// Prompt the user to enter numbers, with a default random string
const inputString = prompt("Enter some numbers (separated by commas):", randomString);

// Create an instance of the NumberOperations class
const numbersInstance = new NumberOperations(inputString);

// Display results
console.log(`Count of numbers: ${numbersInstance.count()}`);
numbersInstance.printNumbers();  // Print numbers with their indexes
console.log(`Odd numbers: ${numbersInstance.odds()}`);
console.log(`Even numbers: ${numbersInstance.evens()}`);
console.log(`Sum of numbers: ${numbersInstance.sum()}`);
console.log(`Product of numbers: ${numbersInstance.product()}`);

// Use the randomLength as the target number for demonstration
console.log(`Numbers greater than ${randomLength}: ${numbersInstance.greaterThan(randomLength)}`);
console.log(`How many times does ${randomLength} appear: ${numbersInstance.howMany(randomLength)}`);

