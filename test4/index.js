function processInput() {
  const input = document.getElementById("input").value;

  // Split input into factors and multiples
  const [factorsStr, multiplesStr] = input.split(" : ");

  // Convert strings to arrays of numbers
  const factors = toNumbers(factorsStr);
  const multiples = toNumbers(multiplesStr);

  // Calculate the sum of valid multiples
  const result = sumOfMultiples(factors, multiples);

  // Output the result in the desired format
  const output = `${result} : ${factorsStr} : ${multiplesStr}`;
  document.getElementById("output").innerText = output;
}

// Convert space-separated string into an array of numbers
function toNumbers(str) {
  return str.split(" ").map(Number);
}

// Sum numbers in 'multiples' that are divisible by any number in 'factors'
function sumOfMultiples(factors, multiples) {
  return multiples
    .filter(num => factors.some(f => num % f === 0))
    .reduce((sum, num) => sum + num, 0);
}
