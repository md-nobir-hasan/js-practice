//factory method for object declaration actually object work like class
function objFunc() {
  return {
    name: "nobir",
    age: "24",
    work: function (status) {
      console.log(this.name + status);
    },
  };
}
var obj = objFunc();
obj.work(" is too busy now");

//constructor method for object declaration
var facObj = function () {
  this.name = "nobir";
  this.age = 23;
  this.status = function (status) {
    return this.name + status;
  };
};

var obj1 = new facObj();
console.log(obj1.status(" very good boy"));
