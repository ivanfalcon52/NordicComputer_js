const pintarCarrito = () => {
    
    modalContainer.innerHTML = "";
    modalContainer.style.display="flex"; 
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
    <h1 class="modal-header-title">Productos Agregados al Carrito</h1>
    `;
    
    modalContainer.append(modalHeader);

    const modalButton = document.createElement("h1");
    modalButton.innerText="x";
    modalButton.className="modal-header-button";

    modalButton.addEventListener("click", () => {
        modalContainer.style.display="none";
    })

    modalHeader.append(modalButton);

    carrito.forEach((producto) => {
        let carritoContenido = document.createElement("div");
        carritoContenido.className="modal-content";
        carritoContenido.innerHTML=`
            <img src = "${producto.imagen}">
            <h3>${producto.nombre}</h3>
            <p>$${producto.precio}</p>
            <p>Cant: ${producto.cantidad}</p>
            <p>Total: ${producto.cantidad * producto.precio}
        `;

        modalContainer.append(carritoContenido);


        
        let eliminar = document.createElement("span");
        eliminar.innerText = "x";
        eliminar.className = "borrar-producto";
        carritoContenido.append(eliminar);

        eliminar.addEventListener("click", eliminarProducto);
    });

    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad,0);

    const totalCompra = document.createElement("div");
    totalCompra.className = "total-content";
    totalCompra.innerHTML = `Total a pagar: $${total}`;
    modalContainer.append(totalCompra); 

    
};

verCarrito.addEventListener("click", pintarCarrito);

const eliminarProducto = () => {
    const encontrarId = carrito.find((element) => element.id);
    carrito = carrito.filter ((carritoId) => {
        return carritoId !== encontrarId;
    });
    contadorCarrito();
    pintarCarrito();
};

const contadorCarrito = () => {
    cantidadCarrito.style.display = "block";
    cantidadCarrito.innerText = carrito.length;
}
/*
`
=>
<
>
(e) => {e.preventDefault()})*/