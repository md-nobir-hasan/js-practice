//call
function sum(z){
    
    return this.x+this.y+z;
}

console.log(sum.call({x:40,y:20},40));

//apply
function sum(z){
    
    return this.x+this.y+z;
}

console.log(sum.apply({x:40,y:20},[40]));

//Bind
function sum(z){
    
    return this.x+this.y+z;
}
var bind_func = sum.bind({x:40,y:20});
console.log(bind_func(40));