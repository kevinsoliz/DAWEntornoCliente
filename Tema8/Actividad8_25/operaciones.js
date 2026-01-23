export function suma(array) {
    return array.reduce((total, numero) => total + numero);
}

export function media(array) {
    return suma(array) / array.length;
}

export function maximo(array) {
    return Math.max(...array);
}