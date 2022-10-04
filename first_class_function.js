//1.fuction can be assign in variable
function add(a, b) {
  var sum = a + b;
  return sum;
}

var summation = add;
console.log(summation(3, 6));

//2.function can be store in array 
var arr = [];
arr.push(add);
console.log(arr[0](3, 98))

//3. function can be store in object 
var obj = {
    obj_sum: add
}
console.log(obj.obj_sum(3,64));