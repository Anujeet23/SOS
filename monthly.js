function attendance(){
    var miss1,miss2,miss3,miss4,miss5,miss6;
    miss1 = document.getElementById("h-1").value;
    miss2 = document.getElementById("h-2").value;
    miss3 = document.getElementById("h-3").value;
    miss4 = document.getElementById("h-4").value;
    miss5 = document.getElementById("h-5").value;
    miss6 = document.getElementById("h-6").value;

    var hrs,x,per;
     hrs = 20 - miss1;
     x = 15 - hrs;
     per = (hrs*100)/20;
    if(per<75){
            document.getElementById("s-1").innerHTML = "Defaulters";
            document.getElementById("o-1").innerHTML = x;
    }
    else if(per>75 && per<=100){
        document.getElementById("s-1").innerHTML = " Not in Defaulters ";
        document.getElementById("o-1").innerHTML = "-";
    }


     hrs = 20 - miss2;
     x = 15 - hrs;
     per = (hrs*100)/20;
    if(per<75){
            document.getElementById("s-2").innerHTML = "Defaulters";
            document.getElementById("o-2").innerHTML = x;
    }
    else if(per>75 && per<=100){
        document.getElementById("s-2").innerHTML = " Not in Defaulters ";
        document.getElementById("o-2").innerHTML = "-";
    }



    hrs = 20 - miss3;
     x = 15 - hrs;
     per = (hrs*100)/20;
    if(per<75){
            document.getElementById("s-3").innerHTML = "Defaulters";
            document.getElementById("o-3").innerHTML = x;
    }
    else if(per>75 && per<=100){
        document.getElementById("s-3").innerHTML = " Not in Defaulters ";
        document.getElementById("o-3").innerHTML = "-";
    }



     hrs = 20 - miss4;
     x = 15 - hrs;
     per = (hrs*100)/20;
    if(per<75){
            document.getElementById("s-4").innerHTML = "Defaulters";
            document.getElementById("o-4").innerHTML = x;
    }
    else if(per>75 && per<=100){
        document.getElementById("s-4").innerHTML = " Not in Defaulters ";
        document.getElementById("o-4").innerHTML = "-";
    }



     hrs = 20 - miss5;
     x = 15 - hrs;
     per = (hrs*100)/20;
    if(per<75){
      document.getElementById("s-5").innerHTML = "Defaulters ";
      document.getElementById("o-5").innerHTML = x;
    }
    else if(per>75 && per<=100){
        document.getElementById("s-5").innerHTML = " Not in Defaulters ";
        document.getElementById("o-5").innerHTML = "-";
    }



     hrs = 20 - miss6;
     x = 15 - hrs;
     per = (hrs*100)/20;
    if(per<75){
            document.getElementById("s-6").innerHTML = "Defaulters ";
            document.getElementById("o-6").innerHTML = x;
    }
    else if(per>75 && per<=100){
        document.getElementById("s-6").innerHTML = " Not in Defaulters ";
        document.getElementById("o-6").innerHTML = "-";
    }

}
