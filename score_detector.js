function score1(){
var m = document.getElementById("marks").value;
var score = m/6;
var cgpa1 = document.getElementById("cgpa").value;
var per = cgpa1*9.5;
var marks = (m*per)/100;

var  m1 = parseInt((marks*18.08)/100);
var m2 = parseInt((marks*17.42)/100);
var m3 = parseInt((marks*16.97)/100);
var m4 = parseInt((marks*16.32)/100);
var m5 = parseInt((marks*15.68)/100);
var m6 = parseInt((marks*15.11)/100);

 document.getElementById("p-1").innerHTML = m1;
 document.getElementById("p-2").innerHTML = m2;
 document.getElementById("p-3").innerHTML = m3;
 document.getElementById("p-4").innerHTML = m4;
 document.getElementById("p-5").innerHTML = m5;
 document.getElementById("p-6").innerHTML = m6;
}




