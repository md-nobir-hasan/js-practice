var arrysum = [1,2,3,5,6,7,8,9];
var arrysum1 = [10,20,30,40,50,60,70,80,90];

function arraySum(arr){
    var sum = 0;
    for(var i=0;i<arr.length;i++){
        sum += arr[i];

    }
    console.log(sum);
    }
arraySum(arrysum1);
