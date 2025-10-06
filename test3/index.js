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
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var n = document.getElementById("n").value;
    a = parseInt(a);
    b = parseInt(b);
    n = parseInt(n);
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