function sample(a, b, func) {
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

//implement of bulid in map and custom map function
//an array
var arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];

//implement of build in map function
var arr2 = arr.map(function (value, index, arr) {
  return value + 5;
});

console.log(arr);
console.log(arr2);

//create custom map function
function map(arr, func) {
  var arr2 = Array.from(arr);

  for (var i = 0; i < arr.length; i++) {
    var value = arr2[i];
    var index = i;
    func(value, index, arr2);
  }
  return arr2;
}

var arrm = map(arr, function (value, index, arr2) {
  return (arr2[index] = value + 5);
});

console.log(arr);
console.log(arrm);

//very simple map function created by me. follow this it's very confortable
function myMap(arr, cb) {
  var arr3 = [];
  for (var i = 0; i < arr.length; i++) {
    var value = cb(arr[i]);
    arr3.push(value);
  }
  return arr3;
}

var arr4 = myMap(arr, function (value) {
  return value * value * value;
});

console.log(arr);
console.log(arr4);
