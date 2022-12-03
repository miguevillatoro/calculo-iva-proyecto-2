let iva = 0.19;
let precioFinal;

function calcularIva(precio){
    let ivaProducto = precio * iva;
    console.log(`El iva del producto es: ${ivaProducto}`)
    
    precioFinal = precio - ivaProducto;
}
