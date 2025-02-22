export async function addRecord(payload){
    let response = await fetch("/api/wishlist",{
        method:"post",
        headers:{
            "content-type":"application/json",
            "Authorization":localStorage.getItem("token")
        },
        body:JSON.stringify(payload)
    })
    return await response.json()
}
export async function getRecord(){
    let response = await fetch("/api/wishlist/"+localStorage.getItem("userid"),{
        method:"get",
        headers:{
            "content-type":"application/json",
            "Authorization":localStorage.getItem("token")
        }
    })
    return await response.json()
}

export async function deleteRecord(payload){
    let response = await fetch("/api/wishlist/"+payload._id,{
        method:"delete",
        headers:{
            "content-type":"application/json",
            "Authorization":localStorage.getItem("token")
        }
    })
    return await response.json()
}