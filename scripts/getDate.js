function getNextDate(Nums, id){
    let today = new Date();
    today.setDate(today.getDate() + Nums);
    document.getElementById(id).innerHTML=today.getFullYear()+"년 "+eval(today.getMonth()+1)+"월 "+today.getDate()+"일 ";
}

function setDate(N){
    for(var i = 1; i <= N; i += 1){
        document.write("<div ");
        document.write("style = 'width:200px; height:300px; border:1px solid; float: left'>");
        document.write("<p ");
        document.write("id = "+"val"+i+">");
        document.write(i);
        document.write("</p>");
        document.write("</div>");
        getNextDate(i-1, "val"+i);
    }
}

function readJSON(file, callback){
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

function setDate2(){
    datajson = readJSON("./data/brief.json"), function(text){
        var Data = JSON.parse(text);
        console.log(Data);
    };
}
setDate(7);
setDate2();