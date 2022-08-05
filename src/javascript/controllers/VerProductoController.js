import { productServices } from "../services/product-services.js";

const obtainProductData = async () =>{
    const url = new URL(window.location);
    const id = url.searchParams.get('id');
    const category = url.searchParams.get('category');


    if(id == null){
        console.log('Error');
    }

    try{
        const product = await productServices.productData(id,category);
        const similares = await productServices.TiendaProductos(category);

        if(product.name && product.imgurl && product.description && product.price){
            const productContent = document.querySelector('[data-product-content]');

            const productoImg = document.createElement('div');
            const description = document.createElement('div');

            productoImg.classList.add('ver-producto__img');
            description.classList.add('description');

            const productImgContent = `
                <img class="img" src="${product.imgurl}" alt="">
            `
            const descriptionContent = `
                <h3 class="ver-producto__titulo">${product.name}</h3>
                <h4 class="ver-producto__precio">$${product.price}</h4>
                <p class="ver-producto__description">${product.description}</p> 
            `

            productoImg.innerHTML = productImgContent;
            description.innerHTML = descriptionContent;

            productContent.appendChild(productoImg);
            productContent.appendChild(description);
        }else{
            throw new Error();
        }
        
    }catch(error){
        console.log('error: ', error);
    }
}

obtainProductData();