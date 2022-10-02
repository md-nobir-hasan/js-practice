//jodi start point and ending point jana thake tahole for loop use korbo. fore loop to akta pakage,start end abong condition jana ace akbare likhe dilam bar bar likha akta jhamela

//ar jodi start point jana thake kintu ending point akta condition er opor vitti kore hoi tahole while loop use korte hobe

var i = 0; //start point jana tai start point likhe dilam
while(i<10){//condition dilam
    // console.log(i);
    i++; //aibar dilam increment or decrement er condition 
}
//uporer loop ta for loop diye kora jai

//main example of while loop is below
var winner_select = true;

while(winner_select){
   var num= Math.floor(Math.random()*10+1);
   if(num===9){
    console.log("Winner winner chicken dinner");
    winner_select = false;
   }else{
    console.log(num);
   }
}