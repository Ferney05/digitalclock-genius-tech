
export const mostrandoHoraActual = () => {
    setInterval(() => {
        const horaActual = new Date();
        const horaActual_sistema = document.querySelector('[data-horaActual_sistema]');
        const segundos_horaActual = document.querySelector('[data-segundos_horaActual]');  
        const minutesSistema = document.querySelector('[dataMinutes]');
        
        horaActual_sistema.innerHTML = `${horaActual.getHours()}`;
        minutesSistema.innerHTML = `${('0' + horaActual.getMinutes()).slice(-2)}`;
        segundos_horaActual.innerHTML = `${('0' + horaActual.getSeconds()).slice(-2)}`;
    }, 1000);
}