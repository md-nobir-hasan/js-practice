var obj = {
    x: 'nobir',
    y: 'salman',
    z: 'mamun',
}

// property check in object 
console.log('x' in obj); //return true
console.log('d' in obj);//return false

// object print using loop //you can print only properties that's is awsome
for(var i in obj){
    console.log(i);
}
for(var i in obj){
    console.log(i +' => '+obj[i]);
}