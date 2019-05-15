var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

var _ = require('lodash');

var array=[1,2,3,4,5,6,7,8,9];
console.log ('answer:',_.without(array,2));
/*
color1.addEventListener("input", function(){
    body.style.background = 
        "linear-gradient(to right," 
        + color1.value
        + "," 
        + color2.value 
        + ")";
})

color2.addEventListener("input", function(){
    body.style.background=
        "linear-gradient(to right,"
        + color1.value
        + ","
        + color2.value
        +")";
})
*/
//make it short and clean

function setcolor(){
    body.style.background = 
        "linear-gradient(to right," 
        + color1.value
        + "," 
        + color2.value 
        + ")";
      css.textContent = body.style.background + ";";
}

color1.addEventListener ("input",setcolor);
color2.addEventListener ("input",setcolor);

/*no need ()
also can be done by add oninput to the html
<input oninput= setcolor() type="color1" value="">
<input oninput= setcolor() type="color2" value="">*/