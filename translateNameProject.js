
export function translateNombreProyecto(){
    const digitalClock = document.querySelector('.nombre-proyecto');

    setInterval(() => {
    digitalClock.style = 'transform: translateX(5px);';
    }, 1000);

    setInterval(() => {
        digitalClock.style = 'transform: translateX(-5px);';
    }, 2000);
}