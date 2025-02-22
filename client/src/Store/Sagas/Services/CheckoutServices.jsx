export async function addRecord(payload){
    let response = await fetch("/api/checkout",{
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
    var url=""
    if(localStorage.getItem("role")=="Buyer")
        url="/api/checkout/user/"+localStorage.getItem("userid")
    else
    url="/api/checkout"
    let response = await fetch(url,{
        method:"get",
        headers:{
            "content-type":"application/json",
            "Authorization":localStorage.getItem("token")
        }
    })
    return await response.json()
}
export async function updateRecord(payload){
    let response = await fetch("/api/checkout/"+payload._id,{
        method:"put",
        headers:{
            "content-type":"application/json",
            "Authorization":localStorage.getItem("token")
        },
        body:JSON.stringify(payload)
    })
    return await response.json()
}
export async function deleteRecord(payload){
    let response = await fetch("/api/checkout/"+payload._id,{
        method:"delete",
        headers:{
            "content-type":"application/json",
            "Authorization":localStorage.getItem("token")
        }
    })
    return await response.json()
}