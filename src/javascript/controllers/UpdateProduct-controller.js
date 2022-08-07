import { productServices } from "../services/product-services.js";

const formulario = document.querySelector('[data-form]');
let imgUrl = '';

const obtainProductData = async () =>{
    const url = new URL(window.location);
    const id = url.searchParams.get('id');
    const category = url.searchParams.get('category');


    if(id == null){
        console.log('Error');
    }

    const productName = document.querySelector('[data-name]');
    const productPrice = document.querySelector('[data-price]');
    const productDescription = document.querySelector('[data-description]');
    const img = document.querySelector('[data-img]')

    try{
        const product = await productServices.productData(id,category);

        if(product.name && product.imgurl && product.description && product.price){
            productName.value = product.name;
            productPrice.value = product.price;
            productDescription.value = product.description;
            img.src = product.imgurl;
        }else{
            throw new Error();
        }
        
    }catch(error){
        console.log('error: ', error);
    }


    img.addEventListener('change',function(){
        const reader = new FileReader();
        reader.addEventListener('load', ()=>{
            img.src = reader.result;
        })
        reader.readAsDataURL(this.files[0]);
    })
}

obtainProductData();



formulario.addEventListener('submit',(event)=>{
    event.preventDefault();
    const url = new URL(window.location);
    const id = url.searchParams.get('id');
    const category = url.searchParams.get('category');
    const name = document.querySelector('[data-name]').value;
    const price = document.querySelector('[data-price]').value;
    const description = document.querySelector('[data-description]').value;
    const imgurl = document.querySelector('[data-img]');
    productServices.updateProduct(name,price,description,imgurl.src,category,id).then((response)=>{
        console.log(response);
        window.location.href = '/administrador.html';
    })
})
