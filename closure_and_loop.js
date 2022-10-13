//In some field closure is not working with loop
//example:
for(var i = 1; i<=5; i++){
    setTimeout(function(){
        console.log(i);
    },1000*i);
}


//solution by creating scope by iife
for(var i = 1;i<=5;i++){
    ((i)=>{
        setTimeout(function(){
            console.log(i);
        },1000*i)
    })(i);
}