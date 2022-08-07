import { productServices } from "../services/product-services.js";

const CrearProducto = (name, imgurl, price,store,id,hidden) =>{
    const producto = document.createElement('div');
    producto.classList.add('producto');

    const content = `
        <img class="producto__img" src="${imgurl}" alt="">
        <h3 class="producto__titulo">${name}</h3>
        <h4 class="producto__precio">$ ${price}</h4>
        <a href="/ver-producto.html?category=${store}&id=${id}" class="ver-producto">Ver Producto</a>
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
        data.forEach(({name,imgurl,price,id}) => {
            if (numberOfProducts>=4) hideProduct = true;
            const newProduct = CrearProducto(name,imgurl,price,store.id,id,hideProduct);
            store.appendChild(newProduct);
            numberOfProducts++;
        });
    }).catch(() => alert('Whoops! Algo ha salido mal, probablemente abriste el proyecto desde GitHub pages, ingresa a mi repositorio y sigue las instrucciones para ejecutar el proyecto: https://github.com/IceHenki6/AluraGeek-challenge'));
})

