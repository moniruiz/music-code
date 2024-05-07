const time= document.getElementById('time');
const date= document.getElementById('date');

const mesnombre = ["Enero", "Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

const intervalo = setInterval(()=>{
    const local = new Date();
    let day = local.getDate();
    let month = local.getMonth();
    let year = local.getFullYear();
    time.innerHTML = local.toLocaleTimeString();
    date.innerHTML= `${day} ${mesnombre[month]} ${year}`;
},100);