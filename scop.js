//js a function create er moddhome scope create hoi. scope kaj kore parents row te, don't go to child

//where scop.js holo global scope (I named it global scope)
var x = 50; // it can be access any where in scop.js because scop.js is the main or first parent 

function sum(){ //create a scope automatically when fuction is decleared (I named i first scope), and this scope's father is scop.js or first parent
    var y = 40; 

    function sub(){ //I named this scope is second scope
        var z = 65;
    }

}
//first scope is the father of second scope
//global scope is the grand father of  second scope
//global scope is the father of first scope
// scope work like real inheritance.so, second scope can access x, y and z, first scope can access y and x , global scope access x. bassa polapain sob somoy paibo ,dito na.