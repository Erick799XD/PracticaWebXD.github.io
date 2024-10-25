let carrito = []; // Array para almacenar los productos en el carrito

function añadirAlCarrito(producto) {
    // Añadir el producto al carrito
    carrito.push(producto);
    actualizarCarrito();
}

function actualizarCarrito() {
    const carritoDiv = document.getElementById("carrito");
    carritoDiv.innerHTML = ""; // Limpiar el contenido actual del carrito

    if (carrito.length === 0) {
        carritoDiv.innerHTML = "<p>No hay productos en el carrito.</p>";
    } else {
        carrito.forEach((producto, index) => {
            const productoDiv = document.createElement("div");
            productoDiv.innerHTML = `
                <span>${producto}</span>
                <button onclick="eliminarDelCarrito(${index})">Eliminar producto</button>
            `;
            carritoDiv.appendChild(productoDiv);
        });
    }
}

function eliminarDelCarrito(index) {
    // Eliminar el producto del carrito
    carrito.splice(index, 1);
    actualizarCarrito();
}