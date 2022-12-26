var clock = new Date();
let today_date_en = clock.toLocaleDateString();
let today_date_bn = clock.toLocaleDateString("bn-BD");

document.getElementById('today_date_bn').context = today_date_bn;
document.getElementById('today_date_en').context = today_date_en;