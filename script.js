if(!localStorage.getItem("banany")){
localStorage.setItem("banany",100);
}

function updateBananas(){
let b = localStorage.getItem("banany");
let el = document.getElementById("banany");
if(el) el.innerText = b;
}

function buyBananas(){
let b = parseInt(localStorage.getItem("banany"));
b += 50;
localStorage.setItem("banany",b);
updateBananas();
}

function startGame(){
window.location.href="main.html";
}

function spin(){

let bananas = parseInt(localStorage.getItem("banany"));
let bet = parseInt(document.getElementById("bet").value);

if(!bet || bet <= 0){
alert("Zadej sázku");
return;
}

if(bet > bananas){
alert("Nemáš dost banánů");
return;
}

let random = Math.random();

let result = document.getElementById("result");

if(random > 0.5){

bananas += bet;
result.innerHTML = "🎉 VÝHRA +" + bet + " 🍌";

}else{

bananas -= bet;
result.innerHTML = "💀 PROHRA -" + bet + " 🍌";

}

localStorage.setItem("banany",bananas);
updateBananas();

}

updateBananas();
