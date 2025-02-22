export async function addRecord(payload){
    let response = await fetch("/api/maincategory",{
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
    let response = await fetch("/api/maincategory",{
        method:"get",
        headers:{
            "content-type":"application/json"
        }
    })
    return await response.json()
}
export async function updateRecord(payload){
    let response = await fetch("/api/maincategory/"+payload._id,{
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
    let response = await fetch("/api/maincategory/"+payload._id,{
        method:"delete",
        headers:{
            "content-type":"application/json",
            "Authorization":localStorage.getItem("token")
        }
    })
    return await response.json()
}