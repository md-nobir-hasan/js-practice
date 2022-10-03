var date = new Date;
var day = date.getDay();

var check = day;
// var day = 8;
switch(day){
    case 0:console.log('Sunday');
        break;
    case 1:console.log('Monday');
        break;
    case 2:console.log('Tuesday');
        break;
    case 3:console.log('Wednesday');
        break;
    case 4:console.log('Thusday');
        break;
    case 5:console.log('Friday');
        break;
    case 6: console.log('Satarday');
        break;
    default: console.log('not availabel');
}