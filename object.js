var obj = {
  name: "nobir", //name holo properties(key bola jete pare) and 'nobir' holo value
}; //literal method for object creation

console.log(obj.name); //array hole [] use kora lagto, object ai jonno . use korbe, very easy. ei system ta ke bole dot notation
//tahole ekta value dukhate ki korbe??
// Constructor method for object creation
var obj1 = Object();
obj1.x = 10;
var obj2 = new Object();
obj2.y = 20;

// we can also use array notation
console.log(obj["name"]);
obj.age = "23";
console.log(obj);
// whern we use object notation 
var x = 'name';
console.log(obj.x);//undifine,cause there is no x properties in obj;
console.log(obj[x]);//here x means 'name', though array notation all property with string. that's is the logic

//add a property by array notation
var dh = 'weight';
obj[dh] = 52;//variable use korte chaile dot notation use na kore array notaion use kora lagbe

console.log(obj);
