import { productServices } from "../services/product-services.js";

const CrearProducto = (name, imgurl, price, id, store) =>{
    const producto = document.createElement('div');
    producto.classList.add('producto');

    const content = `
        <img class="producto__img" src="${imgurl}" alt="">
        <h3 class="producto__titulo">${name}</h3>
        <h4 class="producto__precio">$ ${price}</h4>
        <a href="/ver-producto.html?category=${store}&id=${id}" class="ver-producto">Ver Producto</a>
        <button class="trash-icon" type='button' id='${id}'></button>
        <a class="edit-icon" href="/edit-product.html?category=${store}&id=${id}"></a>
    `


    producto.innerHTML = content;

    const btn = producto.querySelector('.trash-icon');
    id = btn.id;
    btn.addEventListener('click', ()=>{
        productServices.DeleteProduct(store,id).then(response => {
            console.log(response);
        }).catch(err => console.log(err));
    })
    return producto;
}


const stores = ['consolas', 'starwars', 'diversos'];


function addProducts(stores){
    const allProductsSection = document.querySelector('[data-allproducts]');



    stores.forEach(store => {
        productServices.TiendaProductos(store).then((data)=>{
            data.forEach(({name,imgurl,price,id}) => {
                const newProduct = CrearProducto(name,imgurl,price,id,store);
                allProductsSection.appendChild(newProduct);
            });
        }).catch((error) => alert(error));
    })
}

addProducts(stores);

