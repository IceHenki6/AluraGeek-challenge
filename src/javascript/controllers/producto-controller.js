import { productServices } from "../services/product-services.js";

const CrearProducto = (name, imgurl, price,hidden) =>{
    const producto = document.createElement('div');
    producto.classList.add('producto');

    const content = `
        <img class="producto__img" src="${imgurl}" alt="">
        <h3 class="producto__titulo">${name}</h3>
        <h4 class="producto__precio">$ ${price}</h4>
        <h4 class="ver-producto">Ver Producto</h4>
    `

    producto.innerHTML = content;

    if (hidden) producto.classList.add('extra');
    return producto;
}


const stores = document.querySelectorAll('[data-store]');


stores.forEach(store => {
    let numberOfProducts = 0;
    let hideProduct = false;
    productServices.TiendaProductos(store.id).then((data)=>{
        data.forEach(({name,imgurl,price}) => {
            console.log(data.length);
            if (numberOfProducts>=4) hideProduct = true;
            const newProduct = CrearProducto(name,imgurl,price,hideProduct);
            store.appendChild(newProduct);
            numberOfProducts++;
        });
    }).catch((error) => alert(error));
})

