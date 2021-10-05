const b1 = document.getElementById("btn1");
const tb1 = document.getElementById("tbox1");
const fancyr1 = document.getElementById("fancyRadio");

function giveAlert()
{
    alert("Hello, world!");
}

function changeSize()
{
    tb1.style.fontSize = "2em";
}

function changeStyle()
{
    tb1.style.fontWeight = "bold";
}

b1.addEventListener('click', giveAlert);
b1.addEventListener('click', changeSize);
fancyr1.addEventListener('click', changeStyle);
//b1.addEventListener('')
