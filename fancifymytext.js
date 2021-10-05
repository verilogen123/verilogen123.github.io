const b1 = document.getElementById("btn1");
const tb1 = document.getElementById("tbox1");

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
//b1.addEventListener('')
