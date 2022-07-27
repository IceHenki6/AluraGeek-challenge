const TiendaProductos = (tienda) => {
    return fetch(`http://localhost:3000/${tienda}`).then((response)=>{
        return response.json();
    })

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

export const productServices = {
    agregarProducto,
    TiendaProductos
};