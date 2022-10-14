
var obj = {
    name:'Md Nobir',
    age:23,
    job: function(){
        console.log(this.name+' working hard');
    }
}
obj.job();