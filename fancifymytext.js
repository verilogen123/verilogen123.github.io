const b1 = document.getElementById("btn1");
const tb1 = document.getElementById("tbox1");

function giveAlert()
{
    alert("Hello, world!");
}

function changeSize()
{
    tb1.style.fontSize = "24rem";
}

b1.addEventListener('click', giveAlert);
