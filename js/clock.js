function startTime(){
    //Date
    var mydate = new Date();
    var year = mydate.getYear();
        if(year<1000){
            year +=1900
        }
    var day = mydate.getDay();
    var month = mydate.getMonth();
    var daym = mydate.getDate();
    var dayarray = new Array("Неделя,","Понеделник,", "Вторник,", "Сряда,", "Четвъртък,", "Петък,", "Събота,");
    var montharray = new Array("Януари","Февруари","Март","Април","Май","Юни","Юли","Август","Септември","Октомври","Ноември","Декември")
    //DateEnd

    //Time
    var currentTime = new Date();
    var h = currentTime.getHours();
    var m = currentTime.getMinutes();
    var s = currentTime.getSeconds();
    var ms=currentTime.getMilliseconds();
        if(h==24){
            h = 0;
        }
        else if(h>12){
            h = h - 0;
            //-12 for 12 hour clock 
        }
        if(h<10){
            h="0"+h;
        }
        if(m<10){
            m="0"+m;
        }
        if(s<10){
            s="0"+s;
        }
        var myclock = document.getElementById("clock");
        myclock.textContent = " "+dayarray[day]+" "+daym+" "+montharray[month]+" "+year+ '\n' + h +":"+ m +":"+ s;
        myclock.innerHTML = " "+dayarray[day]+" "+daym+" "+montharray[month]+" "+year+ '\n' + h +":"+ m +":"+ s;
        myclock.innerText = " "+dayarray[day]+" "+daym+" "+montharray[month]+" "+year+ '\n' + h +":"+ m +":"+ s;

        setTimeout("startTime()",1000);
}