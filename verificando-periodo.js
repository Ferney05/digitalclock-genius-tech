
export const verificarTiempo = () => {
    const tarde_mañana = document.querySelector('[data-tarde_mañana]');
    const goodDay = document.querySelector('[dataGoodDay]');

    const tiempoActual = new Date();
    const hora = tiempoActual.getHours();

    let jornada = hora >= 12 ? 'PM' : 'AM';
    tarde_mañana.innerHTML = jornada;

    let timeGood = hora >= 12 ? 'Buenas tardes ;)' : 'Buenos días 🌤';
    let goodNoche = hora >= 18 ? 'Buenas noches ☾' : 'Buenas tardes ;)';

    goodDay.innerHTML = timeGood;
    goodDay.innerHTML = goodNoche;

}