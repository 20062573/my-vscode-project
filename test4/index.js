function processInput(input) {
  let parts = input.split(" : ");
  let factors = parts[0].split(" ").map(Number);
  let multiples = parts[1].split(" ");

  let sumFactors = 0;
  for (let i = 0; i < factors.length; i++) {
    sumFactors += factors[i];
  }

  let output = sumFactors + " : " + factors.join(" ") + " : " + multiples.join(" ");
  return output;
}

let input = "3 5 : 1 2 3 4 5 6 7 8 9";
console.log(processInput(input));
