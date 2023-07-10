const GUN = 50;
const BOMB = 100;
const POWER= 25;
const SAFETY =0;

var casilleros = [GUN, BOMB, POWER, SAFETY];

let energyPlayer = 100;

let nivel = 0;

const playerAlive = () => energyPlayer > 0

const hit = () => casilleros[Math.floor(Math.random()*casilleros.length)]; 

let namePlayer;

namePlayer = prompt("Introduce tu nombre");

console.log("Bienvenido "+namePlayer+" ¡Qué comience el juego!")
while(playerAlive() && nivel<10){
    nivel +=1;   
    let niveles = hit(); 
    console.log("------ Nivel " + nivel + "-------")

    if(niveles == GUN){
        energyPlayer =  energyPlayer - GUN;
        console.log("¡Te han disparado!");
        console.log("Ahora tu energía es de " + energyPlayer);
        document.write('<div class="card"><img src="../img/gun.png"></div>')
    } else if(niveles == BOMB){
        energyPlayer =  energyPlayer - BOMB;
        console.log("¡Ha estallado una bomba!");
        console.log("Ahora tu energía es de " + energyPlayer);
        document.write('<div class="card"><img src="../img/bomb.png"></div>') 
    }if(niveles == POWER){
        energyPlayer =  energyPlayer + POWER;
        console.log("¡Has conseguido un RedBull!");
        console.log("Ahora tu energía es de " + energyPlayer);
        document.write('<div class="card"><img src="../img/power.png""></div>')
    } else if(niveles == SAFETY){
        energyPlayer =  energyPlayer;
        console.log("¡Te has salvado esta vez!");
        console.log("Tu energía continua siendo " + energyPlayer);
        document.write('<div class="card"><img src="../img/safety.png""></div>')
    }}
    console.log("---------------------")

    if(playerAlive()){
        console.log("¡Has ganado" + namePlayer + "!")
        document.write('<div class="card"><img src="../img/youwin.jpg""></div>')
    }else {
        console.log("¡Has perdido "+ namePlayer + "!")
        document.write('<div class="card"><img src="../img/gameover.png""></div>')
    }
