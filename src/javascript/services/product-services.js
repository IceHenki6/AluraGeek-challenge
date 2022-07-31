const TiendaProductos = (tienda) => {
    return fetch(`http://localhost:3000/${tienda}`).then((response)=>{
        return response.json();
    })

}


const productData = (id,category)=>{
    return fetch(`http://localhost:3000/${category}/${id}`).then((response) => 
    response.json());
}

const agregarProducto = (name,imgurl,description,price,category)=>{
    return fetch(`http://localhost:3000/${category}`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify({name,imgurl,description,price,id:uuid.v4()})
    }
    )
}


const updateProduct = (name,price,description,imgurl,store,id)=>{
    return fetch((`http://localhost:3000/${store}/${id}`), {
        method: "PUT",
        headers: {
            "Content-Type": "application/json" 
        },
        body: JSON.stringify({name,price,description,imgurl})
    }).then( response => response)
    .catch((err)=>console.log(err))
}

const DeleteProduct = (tienda,id) => {
    return fetch(`http://localhost:3000/${tienda}/${id}`,{
        method: "DELETE"
    })
}

export const productServices = {
    agregarProducto,
    TiendaProductos,
    DeleteProduct,
    productData,
    updateProduct
};