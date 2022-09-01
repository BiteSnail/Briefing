

function getNextDate(Nums, id){
    let today = new Date();
    today.setDate(today.getDate() + Nums);
    document.getElementById(id).innerHTML=today.getFullYear()+"년 "+eval(today.getMonth()+1)+"월 "+today.getDate()+"일 ";
}

function setDate(N){
    for(var i = 0; i<N;i+=1){
        getNextDate(i, "val"+(i+1));
    }
}

for(var i = 1; i <= 7; i += 1){
    document.write("<div ");
    document.write("style = 'width:200px; height:300px; border:1px solid; float: left'>");
    document.write("<p ");
    document.write("id = "+"val"+i+">");
    document.write(i);
    document.write("</p>");
    document.write("</div>");
}
setDate(7);


