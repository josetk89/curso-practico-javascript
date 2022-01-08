const lista1 = [
    100,
    200,
    500,
    700,
    800,
    100000000,
];

const mitadLista1 = Math.floor(lista1.length / 2);

function esPar(numero) {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

let mediana;

if (esPar(lista1.length)) {
    const elemento1 = lista1[mitadLista1];
    const elemento2 = lista1[mitadLista1 - 1];

    mediana = (elemento1 + elemento2) / 2;    
} else {
    mediana = lista1[mitadLista1];    
}