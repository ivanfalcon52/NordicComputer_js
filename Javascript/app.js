const contProductos = document.getElementById("contenidoProductos");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("contenedorModal");
const cantidadCarrito =document.getElementById("cantidadCarrito");

let carrito =[];

const obtenerProd = async () => {
    const respuesta = await fetch ("productos.json");
    const data = await respuesta.json();
    data.forEach((producto) =>{
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
            swal({
                title: "Producto añadido al carrito!",
                icon: "success",
            });
        const repetido = carrito.some((productoRepetido) => productoRepetido.id === producto.id);
        
        if (repetido) {
            carrito.map((prod) => {
                if (prod.id === producto.id) {
                    prod.cantidad++;
                }
            });
        } else{
            carrito.push ({
                id: producto.id,
                imagen: producto.imagen,
                nombre: producto.nombre,
                precio: producto.precio,
                cantidad: producto.cantidad,
            });
        }
        
            
            console.log(carrito);
            contadorCarrito();
        });
    });
}

obtenerProd();




/*
`
=>
<
>*/