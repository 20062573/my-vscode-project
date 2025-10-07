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
document.getElementById("processBtn").addEventListener("click", function() {
  let input = document.getElementById("inputText").value;
  let result = processInput(input);
  document.getElementById("output").textContent = result;
});
