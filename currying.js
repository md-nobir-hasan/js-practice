
function currying(a){
    return function (b){
        return function (c){
            return a+b+c;
        }
    }
}

console.log(currying(4)(5)(6));