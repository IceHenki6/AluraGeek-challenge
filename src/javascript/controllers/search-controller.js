
import { productServices } from "../services/product-services.js";

const url = new URL(window.location);

let onSearch = false;
let searchedProduct = '';
if(url.searchParams.has('search')){
    onSearch = true;
    searchedProduct = url.searchParams.get('search');
    console.log(searchedProduct);
}


// console.log(stores);

const CrearProducto = (name, imgurl, price) =>{
    const producto = document.createElement('div');
    producto.classList.add('producto');

    const content = `
        <img class="producto__img" src="${imgurl}" alt="">
        <h3 class="producto__titulo">${name}</h3>
        <h4 class="producto__precio">$ ${price}</h4>
        <h4 class="ver-producto">Ver Producto</h4>
    `


    producto.innerHTML = content;

    return producto;
}


const stores = ['consolas', 'starwars', 'diversos'];

const allProductsSection = document.querySelector('[data-allproducts]');



stores.forEach(store => {
    productServices.TiendaProductos(store).then((data)=>{
        data.forEach(({name,imgurl,price,id}) => {
            if(onSearch && searchedProduct!=''){
                const expression = new RegExp(searchedProduct,'i');
                if(expression.test(name)){
                    const newProduct = CrearProducto(name,imgurl,price,id,store);
                    allProductsSection.appendChild(newProduct);
                }
            }else{
                const newProduct = CrearProducto(name,imgurl,price,id,store);
                allProductsSection.appendChild(newProduct);
            }
        });
    }).catch((error) => console.log(error));
})