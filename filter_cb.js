var arr = [1, 2, 3, 6, 5, 4, 8];

//build in filter function implement
var arr1 = arr.filter(function (value) {
  return value > 4;
});

console.log(arr1);
console.log(arr);

//custom filter function create
function myFilter(arr, cd) {
  var arrf = [];
  for (var i = 0; i < arr.length; i++) {
    if (cd(arr[i], i)) {
      arrf.push(arr[i]);
    }
  }
  return arrf;
}

var arr2 = myFilter(arr, function (value, index) {
  return value > 4;
});

console.log(arr2);
console.log(arr);
