function add(a, b) {
    return a + b;
}

function heigher(a, b, func) {
    var ad = a + b;
    var subs = a - b;
    var add1 = func(a, b);
    return function () {
        return ad * add1 * subs;
    }
}

var calculation = heigher(3, 5, add);
console.log(calculation());