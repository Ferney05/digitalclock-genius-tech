
const Weekdays = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
const monthsOfTheYear = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

export const mostrarFecha = () => {
    const fechaActual = new Date();
    const data_fechaActual = document.querySelector('[data-fechaActual]');
    data_fechaActual.innerHTML = `${Weekdays[fechaActual.getDay() - 1]} ${('0' + fechaActual.getDate()).slice(-2)} de ${monthsOfTheYear[fechaActual.getMonth()]} del ${fechaActual.getFullYear()}`;
}
