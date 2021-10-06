const button1 = document.getElementById("btn1");
const textarea1 = document.getElementById("tbox1");
const fancyRadio = document.getElementById("fancyRadio");
const boringRadio = document.getElementById("boringRadio");

function giveAlert()
{
    alert("Hello, world!");
}

function makeTextBig()
{
    textarea1.style.fontSize = "2em";
}

function fancifyStyle()
{
    textarea1.style.fontWeight = "bolder";
    textarea1.style.color = "blue";
    textarea1.style.textDecoration = "underline";
}

function boringStyle()
{
    textarea1.style.fontWeight = "normal";
    textarea1.style.color = "black";
    textarea1.style.textDecoration = "none";
}

//button1.addEventListener('click', giveAlert);
button1.addEventListener('click', makeTextBig);
fancyRadio.addEventListener('click', fancifyStyle);
//button1.addEventListener('')
