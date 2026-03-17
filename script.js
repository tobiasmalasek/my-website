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

function spinWheel(){

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

let wheel = document.getElementById("wheel");

let randomDeg = 3600 + Math.floor(Math.random()*360);

wheel.style.transform = "rotate(" + randomDeg + "deg)";

setTimeout(()=>{

let resultIndex = Math.floor(Math.random()*6);

let result = document.getElementById("result");

let multiplier = [2,0,3,0,5,0][resultIndex];

if(multiplier > 0){

let win = bet * multiplier;
bananas += win;

result.innerHTML = "🎉 Výhra " + win + " 🍌";

}else{

bananas -= bet;

result.innerHTML = "💀 Prohra -" + bet + " 🍌";

}

localStorage.setItem("banany",bananas);
updateBananas();

},4000);

}

updateBananas();
