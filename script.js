
import { verificarTiempo } from "./verificando-periodo.js";
import { mostrarFecha } from "./mostrandoFecha.js";
import { mostrandoHoraActual } from "./hora-actual.js";

mostrandoHoraActual();
mostrarFecha();
verificarTiempo();

const digitalClock = document.querySelector('.nombre-proyecto');
const logo = document.querySelector('.logo');

setInterval(() => {
   digitalClock.style = 'transform: translateX(5px);';
}, 1000);

setInterval(() => {
    digitalClock.style = 'transform: translateX(-5px);';
}, 2000);


