// Este es el codigo del cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}

console.groupEnd();

// Este es el codigo del triangulo
console.group("Triangulos");

function perimetroTriangulo(lado1, lado2, base) {
    return (lado1 + lado2 + base);
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

function alturaT(lado2, base) {
    const mitad = parseFloat(base / 2).toFixed(2);
    const altura = Math.sqrt((lado2 * lado2) - (mitad * mitad)).toFixed(2);
    return parseFloat(altura);
}

console.groupEnd();

// Este es el codigo del circulo
console.group("Circulos");

const pi = Math.PI;

function circunferencia(radio) {
    return 2 * pi * radio;
}

function areaCirculo(radio) {
    return pi * (radio * radio);
}

console.groupEnd();

//Aqui interactuamos con HTML

// Esta es el area de los cuadrados

const inputCuadrado = document.getElementById("InputCuadrado");
const unidadCuadrado = document.getElementById("InputUnidadCuadrado");


function calcularPerimetroCuadrado() {    
    
    const unidadCua = unidadCuadrado.value;
    const value = inputCuadrado.value;
    const perimetro = perimetroCuadrado(value);
    const resultadoPerimetro = document.getElementById("result");
    resultadoPerimetro.innerText = "El perimetro del cuadrado es de: " + perimetro + unidadCua + ".";
}
function calcularAreaCuadrado() {  

    const unidadCua = unidadCuadrado.value;
    const value = inputCuadrado.value;
    const area = areaCuadrado(value);
    const resultadoArea = document.getElementById("result");
    resultadoArea.innerText = "El area del cuadrado es de: " + area + unidadCua + "².";
}

// Este es el area de los circulos.

const inputCirculo = document.getElementById("InputCirculo");
const unidadCirculo = document.getElementById("InputUnidadCirculo");


function calcularCircunferencia() {
    
    const unidadCi = unidadCirculo.value;
    const value = inputCirculo.value;
    const perimetroCirculo = circunferencia(value).toFixed(2);
    const resultadoPerimetro = document.getElementById("resultCirculo");
    resultadoPerimetro.innerText = "El perimetro del circulo es de: " + perimetroCirculo + unidadCi + ".";
}

function calcularAreaCirculo() {

    const unidadCi = unidadCirculo.value;
    const value = inputCirculo.value;
    const area = areaCirculo(value).toFixed(2);
    const resultadoArea = document.getElementById("resultCirculo");
    resultadoArea.innerText = "El area del circulo es de: " + area + unidadCi + "².";
}

// Este es el area de los Triangulos
var tipo = 0;
const input1 = document.getElementById("Lado1");
const input2 = document.getElementById("Lado2");
const input3 = document.getElementById("Base");
const unidadTriangulo = document.getElementById("InputUnidadTriangulo");


function tipoTriangulo(lado1, lado2, base) {
    if(lado1 > 0 && lado2 > 0 && base > 0) {
        if (lado1 == lado2 && lado1 == base) {
            tipo = "Triangulo Equilátero";            
        } else if (lado1 == lado2 && lado1 != base && lado2 != base ) {
            if (lado1 >= (base/2)) {
                tipo = "Triangulo Isósceles";
            } else {
                tipo = "Estas medidas no forman un triangulo";
            }            
        } else if (lado1 == base && lado1 != lado2 && lado2 != base ) {
            tipo = "Es un triangulo Isósceles, pero coloca los valores que son similares en el Lado A y en el Lado B";            
        } else if (base == lado2 && lado1 != base && lado2 != lado1 ) {
            tipo = "Es un triangulo Isósceles, pero coloca los valores que son similares en el Lado A y en el Lado B";            
        } else {
            tipo = "Es un Triangulo Escaleno";
        }
    }    
    else {
        tipo = "Los valores deben ser mayores que cero, intentalo nuevamente";
    }
}

function calcularPerimetroTriangulo() {
    const lado1 = parseInt(input1.value);
    const lado2 = parseInt(input2.value);
    const base = parseInt(input3.value);
    const unidadTr = unidadTriangulo.value;

    tipoTriangulo(lado1, lado2, base);

    if (tipo === "Triangulo Equilátero" || tipo === "Triangulo Isósceles") {
        const perimetro = perimetroTriangulo(lado1, lado2, base);
        const resultPerimetro = document.getElementById("resultTriangulo");
        resultPerimetro.innerText = "El perimetro de este " + tipo + " es de: " + perimetro + unidadTr + ".";
    } else {
        const resultAltura = document.getElementById("resultTriangulo");
        resultAltura.innerText = tipo;
    }    
}

function calcularAreaTriangulo() {  

    const lado1 = parseInt(input1.value);
    const lado2 = parseFloat(input2.value);
    const base = parseFloat(input3.value);
    const altura = alturaT(lado2,base);
    const unidadTr = unidadTriangulo.value;

    tipoTriangulo(lado1, lado2, base);

    if (tipo === "Triangulo Equilátero" || tipo === "Triangulo Isósceles") {
        const area = areaTriangulo(base, altura).toFixed(2);
        const resultArea = document.getElementById("resultTriangulo");
        resultArea.innerText = "El área de este " + tipo + " es de: " + area + unidadTr + "².";
    } else {
        const resultAltura = document.getElementById("resultTriangulo");
        resultAltura.innerText = tipo;
    }    
}

function calcularAlturaTriangulo() {

    const lado1 = parseInt(input1.value);
    const lado2 = parseInt(input2.value);
    const base = parseInt(input3.value);   
    const unidadTr = unidadTriangulo.value; 

    tipoTriangulo(lado1, lado2, base);
   
    if (tipo === "Triangulo Equilátero" || tipo === "Triangulo Isósceles") {
        const alturaTriangulo = alturaT(lado2, base);
        const resultAltura = document.getElementById("resultTriangulo");
        resultAltura.innerText = "La altura de este " + tipo + " es de: " + alturaTriangulo + unidadTr + ".";
    } else {
        const resultAltura = document.getElementById("resultTriangulo");
        resultAltura.innerText = tipo;
    }
}
