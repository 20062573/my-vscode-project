alert("JS loaded!");
function euler1() {
    var sum = 0;
    var i = 0;
    while (i < 1000) {
        if (i % 3 == 0 || i % 5 == 0) {
            sum = sum + i;
        }
        i = i + 1;
    }
    alert("Sum is: " + sum);
}

function eulerCustom() {
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);
    var n = parseInt(document.getElementById("n").value);

    if (isNaN(a) || isNaN(b) || isNaN(n) || n <= 0) {
        alert("Please enter valid positive numbers for A, B, and N.");
        return;
    }

    var sum = 0;
    var i = 0;

    while (i < n) {
        if (i % a == 0 || i % b == 0) {
            sum = sum + i;
        }
        i = i + 1;
    }
    alert("Sum is: " + sum);
}
