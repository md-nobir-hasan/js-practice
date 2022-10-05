//use of custom foreach and buildin foreach function
//an array
var arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];

//implement of build in foreach function
arr.forEach(function (value, index, arr) {
  console.log(value);
});

//creation a foreach function
function forEach(a, func) {
  for (var i = 0; i < a.length; i++) {
    var value = a[i];
    var index = i;
    func(value, index);
  }
}

//implement of custom foreach function
sample(arr, function (value, index) {
  console.log(value);
});

