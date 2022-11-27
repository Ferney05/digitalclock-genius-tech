
export const verificarTiempo = () => {
    const tarde_mañana = document.querySelector('[data-tarde_mañana]');
    const goodDay = document.querySelector('[dataGoodDay]');

    const tiempoActual = new Date();
    const hora = tiempoActual.getHours();

    let timeGood = hora >= 12 ? 'Buenas tardes ;)' : 'Buenos días 🌤';
    let goodNoche = hora > 18 ? 'Buenas noches ☾' : 'Buenos días 🌤';

    goodDay.innerHTML = timeGood;
    goodDay.innerHTML = goodNoche;

}