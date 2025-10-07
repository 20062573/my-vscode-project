function processInput() {
  const input = document.getElementById("input").value;
  const [factorsStr, multiplesStr] = input.split(" : ");
  const factors = toNumbers(factorsStr);
  const multiples = toNumbers(multiplesStr);
  const result = sumOfMultiples(factors, multiples);
  const output = `${result} : ${factorsStr} : ${multiplesStr}`;
  document.getElementById("output").innerText = output;
}
function toNumbers(str) {
  return str.split(" ").map(Number);
}
function sumOfMultiples(factors, multiples) {
  return multiples
    .filter(num => factors.some(f => num % f === 0))
    .reduce((sum, num) => sum + num, 0);
}
