const cronometro = document.getElementById("cronometro");
const playpauseBtn = document.getElementById("playpause-btn");
const restartBtn = document.getElementById("restart-btn");

let stateWatch = "pausa";
let timeInterval;
let segundos = 0;
let minutos = 0;
let horas = 0;
let segundosFormato = 0;
let minutosFormato = 0;
let horasFormato = 0;

function actualizarCronometro() {
    
    segundos++;

    if(segundos / 60 === 1){
        segundos = 0;
        minutos++;

        if(minutos / 60 === 1){
            minutos = 0;
            horas++;
        }
    }

    segundosFormato = daFormato(segundos);
    minutosFormato = daFormato(minutos);
    horasFormato = daFormato(horas);

    cronometro.innerText = `${horasFormato}:${minutosFormato}:${segundosFormato}`;
}


function daFormato(tiempo) {
    if(tiempo < 10){
        return `0${tiempo}`;
    }else{
        return tiempo;
    }
}


playpauseBtn.addEventListener("click", function () {
    
    if(stateWatch === "pausa"){

        timeInterval = window.setInterval(actualizarCronometro, 1000);

        playpauseBtn.innerHTML = `<span class="material-symbols-outlined">
        pause
        </span>`;

        playpauseBtn.classList.remove("play");
        playpauseBtn.classList.add("pausa");
        stateWatch = "play";

    }else {

        window.clearInterval(timeInterval);

        playpauseBtn.innerHTML = `<span class="material-symbols-outlined">
        play_arrow
        </span>`;

        playpauseBtn.classList.remove("pausa");
        playpauseBtn.classList.add("play");
        stateWatch = "pausa";
    }
});


restartBtn.addEventListener("click", function () {

    window.clearInterval(timeInterval);

    cronometro.innerText = "00:00:00";

    segundos = 0;
    minutos = 0;
    horas = 0;

    if (stateWatch === "play") {

        playpauseBtn.classList.remove("pausa");
        playpauseBtn.classList.add("play");

        playpauseBtn.innerHTML = `<span class="material-symbols-outlined">
        play_arrow
        </span>`;

        stateWatch = "pausa";
    }

});



