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
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    const resultadoPerimetro = document.getElementById("result");
    resultadoPerimetro.innerText = "El perimetro del cuadrado es de: " + perimetro + "cm.";
}
function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    const resultadoArea = document.getElementById("result");
    resultadoArea.innerText = "El area del cuadrado es de: " + area + "cm²."
}

function calcularCircunferencia() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const perimetroCirculo = circunferencia(value).toFixed(2);
    const resultadoPerimetro = document.getElementById("resultCirculo");
    resultadoPerimetro.innerText = "El perimetro del circulo es de: " + perimetroCirculo + "cm."
}

function calcularAreaCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const area = areaCirculo(value).toFixed(2);
    const resultadoArea = document.getElementById("resultCirculo");
    resultadoArea.innerText = "El area del circulo es de: " + area + "cm²."
}

function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("Lado1");
    const input2 = document.getElementById("Lado2");
    const input3 = document.getElementById("Base");

    const lado1 = parseInt(input1.value);
    const lado2 = parseInt(input2.value);
    const base = parseInt(input3.value);

    const perimetro = perimetroTriangulo(lado1, lado2, base);
    const resultPerimetro = document.getElementById("resultTriangulo");
    resultPerimetro.innerText = "El perimetro del triangulo es de: " + perimetro + "cm.";
}

function calcularAreaTriangulo() {    
    const input2 = document.getElementById("Lado2");
    const input3 = document.getElementById("Base");

    const lado2 = parseFloat(input2.value);
    const base = parseFloat(input3.value);
    const altura = alturaT(lado2,base);

    const area = areaTriangulo(base, altura);
    const resultArea = document.getElementById("resultTriangulo");
    resultArea.innerText = "El area del triangulo es de: " + area + "cm²."
}

function calcularAlturaTriangulo() {

    const input1 = document.getElementById("Lado1");
    const input2 = document.getElementById("Lado2");
    const input3 = document.getElementById("Base");

    const lado1 = parseInt(input1.value);
    const lado2 = parseInt(input2.value);
    const base = parseInt(input3.value);

    let tipo = 0;
    
    if(lado1 > 0 && lado2 > 0 && base > 0) {
        if (lado1 == lado2 && lado1 == base) {
            tipo = "Triangulo Equilátero";
            const alturaTriangulo = alturaT(lado2, base);
            const resultAltura = document.getElementById("resultTriangulo");
            resultAltura.innerText = "La altura de este " + tipo + " es de: " + alturaTriangulo + "cm.";
        } else if (lado1 == lado2 && lado1 != base && lado2 != base ) {
            if (lado1 >= (base/2)) {
                tipo = "Triangulo Isósceles";
                const alturaTriangulo = alturaT(lado2, base);
                const resultAltura = document.getElementById("resultTriangulo");
                resultAltura.innerText = "La altura de este " + tipo + " es de: " + alturaTriangulo + "cm.";
            } else {
                tipo = "Estas medidas no forman un triangulo";
            }            
        } else if (lado1 == base && lado1 != lado2 && lado2 != base ) {
            alert("Es un triangulo Isósceles, pero coloca los valores que son similares en el Lado A y en el Lado B");            
        } else if (base == lado2 && lado1 != base && lado2 != lado1 ) {
            alert("Es un triangulo Isósceles, pero coloca los valores que son similares en el Lado A y en el Lado B");            
        } else {
            alert("Es un Triangulo Escaleno");
        }
    }    
    else {
        alert("Los valores deben ser mayores que cero, intentalo nuevamente");
    }
}


