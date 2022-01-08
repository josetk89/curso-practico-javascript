
// console.log({ precioOriginal, descuento, porcentajePrecioConDescuento, precioConDescuento });

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function calcularPrecio() {
    const input1 = document.getElementById("InputPrice");
    const input2 = document.getElementById("InputDiscount");

    const precio = parseInt(input1.value);
    const desc = parseInt(input2.value);

    const priceDiscount = calcularPrecioConDescuento(precio, desc);
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento es: $" + priceDiscount;
}

// Implementar el descuento por cupones