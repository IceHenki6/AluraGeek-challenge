

const adminsList = ()=>{
    return fetch('http://localhost:3000/admins').then((response)=>{
        return response.json();
    })
}

export const adminServices = {
    adminsList
}