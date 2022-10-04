function sample (a, b, func) {  
    var sum = a + b;
    var sub = a - b;
    var c_cal = func(sum, sub);
    return sub * sum * c_cal;
}

console.log(
  sample(7, 9, function (a, b) {
    return a * b;
  })
);