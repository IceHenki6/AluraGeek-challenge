import { productServices } from "../services/product-services.js";

//Agregar imagen
const imgInput = document.querySelector('#img-input');
let img = '';

imgInput.addEventListener('change',function(){
    const reader = new FileReader();
    reader.addEventListener('load', ()=>{
        img = reader.result;
    })
    reader.readAsDataURL(this.files[0]);
})

const form = document.querySelector('[data-form]');

form.addEventListener('submit', (event)=>{
    event.preventDefault();

    const productName = document.querySelector('[data-name]').value;
    const productDescription = document.querySelector('[data-description]').value;
    const productPrice = document.querySelector('[data-price]').value;
    const productCategory = document.querySelector('[data-category]').value;
    const productImage = img;

    console.log('imgurl: ', productImage);

    productServices.agregarProducto(productName, productImage,productDescription,productPrice,productCategory).then((response)=>{
        console.log(response);
    }).catch(err => console.log(err));
})