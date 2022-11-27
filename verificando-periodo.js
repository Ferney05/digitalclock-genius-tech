
export const verificarTiempo = () => {
    const tarde_mañana = document.querySelector('[data-tarde_mañana]');
    const tiempoActual = new Date();
    const hora = tiempoActual.getHours();

    let jornada = hora >= 12 ? 'PM' : 'AM';
    tarde_mañana.innerHTML = jornada;

}