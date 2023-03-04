// 
function getSmallestPrimeNumber(numbers) {
  let smallestPrime = null;
  for (let i = 0; i < numbers.length; i++) {
    if (isPrime(numbers[i])) {
      if (smallestPrime === null || numbers[i] < smallestPrime) {
        smallestPrime = numbers[i];
      }
    }
  }
  return smallestPrime;
}

function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function rotateArray(array, count) {
  count = count % array.length;
  for (let i = 0; i < count; i++) {
    array.push(array.shift());
  }
  return array;
}

function getPassword(numbers) {
  const smallestPrime = getSmallestPrimeNumber(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  const moduloCount = smallestPrime !== null ? sum % smallestPrime : sum;
  return rotateArray(numbers, numbers.length - moduloCount);
}

// Example usage:
const numbers = [90, 45, 37, 80, 1, 46];
const password = getPassword(numbers);
console.log(password); // [80, 1, 46, 90, 45, 37]
