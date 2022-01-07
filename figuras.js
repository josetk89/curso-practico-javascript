// Este es el codigo del cuadrado
console.group("Cuadrados");


const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm.");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El Perimetro del cuadrado mide: " + perimetroCuadrado + "cm.");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El Area del cuadrado mide: " + areaCuadrado + "cm².");
console.groupEnd();

// Este es el codigo del triangulo
console.group("Triangulos");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
console.log("Los lados del triangulo miden: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, y " + baseTriangulo + "cm.");

const alturaTriangulo = 5.5;
console.log("La altura del triangulo mide: " + alturaTriangulo + "cm.");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El Perimetro del triangulo mide: " + perimetroTriangulo + "cm.");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El Area del triangulo mide: " + areaTriangulo + "cm².");
console.groupEnd();

// Este es el codigo del circulo
console.group("Circulos");

const radioCirculo = 4;
console.log("El radio del circulo es: " + radioCirculo + "cm.");

const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo es: " + diametroCirculo + "cm.");

const pi = Math.PI;
console.log("El valor de pi es: " + pi + "cm.");

const circunferencia = diametroCirculo * pi;
console.log("La circunferencia es de: " + circunferencia + "cm.");

const areaCirculo = pi * radioCirculo * radioCirculo;
console.log("El Area del circulo mide: " + areaCirculo + "cm².");

console.groupEnd();