// Este es el codigo del cuadrado
console.group("Cuadrados");


//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm.");

function perimetroCuadrado(lado) {
    return lado * 4;
}

// console.log("El Perimetro del cuadrado mide: " + perimetroCuadrado + "cm.");

function areaCuadrado(lado) {
    return lado * lado;
}

//const areaCuadrado = ladoCuadrado * ladoCuadrado;
//console.log("El Area del cuadrado mide: " + areaCuadrado + "cm².");
console.groupEnd();

// Este es el codigo del triangulo
console.group("Triangulos");

function perimetroTriangulo(lado1, lado2, base) {
    return (lado1 + lado2 + base);
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;
//console.log("Los lados del triangulo miden: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, y " + baseTriangulo + "cm.");
//const alturaTriangulo = 5.5;
//console.log("La altura del triangulo mide: " + alturaTriangulo + "cm.");
//const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
//console.log("El Perimetro del triangulo mide: " + perimetroTriangulo + "cm.");
//const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
//console.log("El Area del triangulo mide: " + areaTriangulo + "cm².");
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

//const radioCirculo = 4;
//console.log("El radio del circulo es: " + radioCirculo + "cm.");
//const diametroCirculo = radioCirculo * 2;
//console.log("El diametro del circulo es: " + diametroCirculo + "cm.");
//const pi = Math.PI;
//console.log("El valor de pi es: " + pi + "cm.");
//const circunferencia = diametroCirculo * pi;
//console.log("La circunferencia es de: " + circunferencia + "cm.");
//const areaCirculo = pi * radioCirculo * radioCirculo;
//console.log("El Area del circulo mide: " + areaCirculo + "cm².");

console.groupEnd();

//Aqui interactuamos con HTML
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

function calcularCircunferencia() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const perimetroCirculo = circunferencia(value);
    alert(perimetroCirculo);
}

function calcularAreaCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);
}

function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("Lado1");
    const input2 = document.getElementById("Lado2");
    const input3 = document.getElementById("Base");

    const lado1 = parseInt(input1.value);
    const lado2 = parseInt(input2.value);
    const base = parseInt(input3.value);

    const perimetro = perimetroTriangulo(lado1, lado2, base);
    alert(perimetro);    
}

function calcularAreaTriangulo() {
    const input1 = document.getElementById("Base");
    const input2 = document.getElementById("Altura");

    const base = parseInt(input1.value);
    const altura = parseInt(input2.value);

    const area = areaTriangulo(base, altura);
    alert(area);
}