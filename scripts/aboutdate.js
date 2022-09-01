/** 오늘 날짜에서 얼마나 떨어져 있는지 입력 **/
function getNextDate(Nums, id){
    let today = new Date();
    today.setDate(today.getDate() + Nums);
    document.getElementById(id).innerHTML=today.getFullYear()+"년 "+eval(today.getMonth()+1)+"월 "+today.getDate()+"일 ";
}

getNextDate(0, "val1");
getNextDate(1, "val2");
getNextDate(2, "val3");