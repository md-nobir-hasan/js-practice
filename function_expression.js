//function expression sudu javaScript ai kora jai 
var addition = function (a, b) {
    var sum = a + b
    return sum
}

//java script work as asyncronous
// this function work after 3 second 
setTimeout(function () {
    console.log('I will appear after 3 second')
}, 3000)

var twoNumberAdditon = addition
var summation = twoNumberAdditon(4, 8)
console.log(summation)