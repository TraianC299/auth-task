


export default async function fetchData({method, url, body, token}:{
    method: string,
    url: string,
    body?: Object,
    token?: string
}) {
    const options:any = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
    }

    if(method==="POST" || method==="PUT" || method==="PATCH"){
        options.body = JSON.stringify(body)
    }
    if(token){
        options.headers["Authorization"] = `Bearer ${token}`
    }
    try{
    const response = await fetch(`http://localhost:4000${url}`, options)
        try{
            const resData = await response.json()
            return resData
        }catch(e){
            console.log(e)
        }
    }catch(e){
        console.log(e)
    }
    
    
}