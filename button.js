let a = document.getElementsByClassName("a");
let text=document.getElementsByTagName("h1");
let c=document.getElementById("red");
c.onclick=function(){
    a[0].style.backgroundColor = "red";
    text[0].style.color = "red";
};


let d=document.getElementById("yellow");
d.onclick=function(){
    a[0].style.backgroundColor = "yellow";
    text[0].style.color = "yellow"; 
};

let e=document.getElementById("blue");
e.onclick=function(){
    a[0].style.backgroundColor = "blue";
    text[0].style.color = "blue";
};

let f=document.getElementById("green");
f.onclick=function(){
    a[0].style.backgroundColor = "green";
    text[0].style.color = "green";
};



