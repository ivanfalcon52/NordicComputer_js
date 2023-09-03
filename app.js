const contProductos = document.getElementById("contenidoProductos");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("contenedorModal");
let carrito =[];

productos.forEach((producto) =>{
    let contenido = document.createElement("div");
    contenido.className = "card";
    contenido.innerHTML = `
    <img src = "${producto.imagen}">
    <h3>${producto.nombre}</h3>
    <p>$${producto.precio}</p>
    `;

    contenidoProductos.append(contenido);

    let comprar = document.createElement("button");
    comprar.innerText="Comprar";
    comprar.className="comprar";

    contenido.append(comprar);

    comprar.addEventListener("click", () =>{
        carrito.push ({
            id: producto.id,
            imagen: producto.imagen,
            nombre: producto.nombre,
            precio: producto.precio,
        });
        console.log(carrito);
    })
});

verCarrito.addEventListener("click", (e) => {
    e.preventDefault();
    
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
        carritoContenido.classname="modal-content";
        carritoContenido.innerHTML=`
            <img src = "${producto.imagen}">
            <h3>${producto.nombre}</h3>
            <p>$${producto.precio}</p>
        `;

        modalContainer.append(carritoContenido);
    });

    const total = carrito.reduce((acc, el) => acc + el.precio,0);

    const totalCompra = document.createElement("div");
    totalCompra.className = "total-content";
    totalCompra.innerHTML = `total a pagar: $${total}`;
    modalContainer.append(totalCompra); 
});

/*
`
=>
<
>*/