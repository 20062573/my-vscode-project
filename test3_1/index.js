function listEuler1(a, b, l) {
  return l.filter(x => x % a === 0 || x % b === 0)
          .reduce((sum, x) => sum + x, 0);
}
function listEuler2(aArray, l) {
  return l.filter(x => aArray.some(div => x % div === 0))
          .reduce((sum, x) => sum + x, 0);
}
function listEuler3(aArray, l) {
  return listEuler2(aArray, l);
}
function eulerlist() {
  let a = parseInt(document.getElementById('a1').value);
  let b = parseInt(document.getElementById('b1').value);
  let l = document.getElementById('list1').value.trim().split(" ").map(Number);
  let result = listEuler1(a, b, l);
  alert("Sum: " + result);
}
function euler2Lists() {
  let a = document.getElementById('divisors2').value.trim().split(" ").map(Number);
  let l = document.getElementById('list2').value.trim().split(" ").map(Number);
  let result = listEuler2(a, l);
  alert("Sum: " + result);
}
function euler2Lists1() {
  let a = document.getElementById('divisors3').value.trim().split(" ").map(Number);
  let l = document.getElementById('list3').value.trim().split(" ").map(Number);
  let result = listEuler3(a, l);
  alert("Sum: " + result);
}
