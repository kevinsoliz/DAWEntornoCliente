export function askPermission() {
  const permiso = confirm("¿Permites el acceso a tu ubicación?");
  return permiso;
}

export function getLongitude(resultado) {
  navigator.geolocation.getCurrentPosition((position) => {
    const longitud = position.coords.longitude;
    resultado.value = `Longitud: ${longitud}`;
  });
}

export function getLatitude(resultado) {
  navigator.geolocation.getCurrentPosition((position) => {
    const latitud = position.coords.latitude;
    resultado.value = `Latitud: ${latitud}`;
  });
}

export function getAltitude(resultado) {
  navigator.geolocation.getCurrentPosition((position) => {
    const altitud = position.coords.altitude;
    resultado.value = `Altitud: ${altitud}`;
  });
}
