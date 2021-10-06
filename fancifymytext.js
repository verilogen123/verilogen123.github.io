const biggerButton = document.getElementById("biggerButton");
const uppercaseButton = document.getElementById("uppercaseButton");
const textarea1 = document.getElementById("textarea1");
const fancyRadio = document.getElementById("fancyRadio");
const boringRadio = document.getElementById("boringRadio");
//const radioGroup1 = document.querySelector("radioGroup1");

function bigAlert()
{
    alert("The text is now bigger.");
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

function makeTextUpper()
{
    textarea1.style.textTransform = "uppercase";
}

biggerButton.addEventListener('click', bigAlert);
biggerButton.addEventListener('click', makeTextBig);
uppercaseButton.addEventListener('click', makeTextUpper);
//radioGroup1.addEventListener('change', giveAlert);
fancyRadio.addEventListener('click', fancifyStyle);
boringRadio.addEventListener('click', boringStyle);