// Q1. Student A took Student B's Laptop and started playing with him by changing his password. B
// requested A to reveal the password, but A doesn't want to end the fun by revealing the password straightaway, so he asked B to select a number N. Then he gave a set of N numbers, stating that if he takes the modulo of, a sum of the given numbers with the smallest prime number from the given set of numbers if exists, else by finding the smallest prime divisor of sum, would give him the age of his loved ones. So spinning the given numbers that many times in an anticlockwise direction he will get the password for his device.

// Example:

// N = 6

// Input: 90 45 37 80 1 46

// Output: 80 1 46 90 45 37

// N = 5

// Input: 90 45 78 27 63

// Output: 27 63 90 45 78
// Skill mapping: Js Intermediate(Stacks and Queue)


function getSpunPassword(numbers) {
  // Find the smallest prime number from the given set of numbers if exists, else find the smallest prime divisor of the sum of the given numbers.
  let smallestPrime = null;
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    if (isPrime(numbers[i])) {
      if (smallestPrime === null || numbers[i] < smallestPrime) {
        smallestPrime = numbers[i];
      }
    }
  }
  if (smallestPrime === null) {
    smallestPrime = getSmallestPrimeDivisor(sum);
  }
  
  // Take the modulo of the sum of the given numbers with the smallest prime number obtained in step 1.
  const modulo = sum % smallestPrime;
  
  // Spin the given numbers in an anticlockwise direction by the number obtained in step 2.
  const queue = [];
  for (let i = 0; i < numbers.length; i++) {
    queue.push(numbers[i]);
  }
  for (let i = 0; i < modulo; i++) {
    const number = queue.shift();
    queue.push(number);
  }
  
  // Return the spun numbers as the password for the device.
  return queue;
}

function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function getSmallestPrimeDivisor(n) {
  if (n < 2) {
    return null;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0 && isPrime(i)) {
      return i;
    }
  }
  if (isPrime(n)) {
    return n;
  }
  return null;
}

const numbers = [90, 45, 78, 27, 63];
const spunPassword = getSpunPassword(numbers);
console.log(spunPassword); // im not getting the correct Output: [27, 63, 90, 45, 78]
