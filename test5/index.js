function process() {
  let input = document.getElementById('input').value;
  let output = '';
  try {
    if (input.includes("error")) throw new Error("error");
    output = input;
  } catch (e) {
    output = "corrupt : " + input;
  }
  document.getElementById('output').textContent = output;
}