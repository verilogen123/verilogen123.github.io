const biggerButton = document.getElementById("biggerButton");
const mooButton = document.getElementById("mooButton");
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

function addMoo()
{
    let textarea1Text = document.getElementById("textarea1").textContent;
    let sentences = textarea1Text.split(".");
    sentences = parts.join(".-Moo");
    textarea1Text = sentences;
}

biggerButton.addEventListener('click', bigAlert);
biggerButton.addEventListener('click', makeTextBig);
mooButton.addEventListener('click', makeTextUpper);
mooButton.addEventListener('click', addMoo);
//radioGroup1.addEventListener('change', giveAlert);
fancyRadio.addEventListener('click', fancifyStyle);
boringRadio.addEventListener('click', boringStyle);