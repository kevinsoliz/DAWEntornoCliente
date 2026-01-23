import * as geo from './geo.js';

let btnPermiso = document.getElementById('btnPermiso');
let botonesGeo = document.getElementById('botonesGeo');


let btnLatitud = document.getElementById('btnLatitud');
let btnLongitud = document.getElementById('btnLongitud');
let btnAltitud = document.getElementById('btnAltitud');
let resultado = document.getElementById('resultado');

btnPermiso.addEventListener('click', () => {
    let permiso = geo.askPermission();
    if (permiso) {
        botonesGeo.style.display = 'block';
    }
});


btnLatitud.addEventListener('click', () => {
  geo.getLatitude(resultado);
});


btnLongitud.addEventListener('click', () => {
    geo.getLongitude(resultado);
});

btnAltitud.addEventListener('click', () => {
    geo.getAltitude(resultado);
});