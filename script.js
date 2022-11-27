
import { verificarTiempo } from "./verificando-periodo.js";
import { mostrarFecha } from "./mostrandoFecha.js";
import { mostrandoHoraActual } from "./hora-actual.js";

mostrandoHoraActual();
mostrarFecha();
verificarTiempo();

const logo = document.querySelector('.logo');

setInterval(() => {
   logo.style = 'transform: translateX(5px);';
}, 1000);

setInterval(() => {
    logo.style = 'transform: translateX(-5px);';
}, 2000);


