const button1 = document.getElementById("button1");
const textarea1 = document.getElementById("textarea1");
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
    textarea1.style.fontWeight = "900";
    textarea1.style.color = "blue";
    textarea1.style.textDecoration = "underline";
}

function boringStyle()
{
    textarea1.style.fontWeight = "400";
    textarea1.style.color = "black";
    textarea1.style.textDecoration = "none";
}

//button1.addEventListener('click', giveAlert);
button1.addEventListener('click', makeTextBig);
fancyRadio.addEventListener('click', fancifyStyle);
boringRadio.addEventListener('click', boringStyle);
//button1.addEventListener('')
