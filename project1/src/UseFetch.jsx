import { useState, useEffect } from "react"

const useFetch=(url)=>{
    const [ data, setData ]=useState(null)
    const [ isLoading, setIsLoading ]=useState(true)
    const [ name, setName ]=useState("mario")
    const [ error, setError ]=useState(null)

    useEffect(()=>{
        setTimeout(()=>{
            fetch(url)
            .then(res => {
                if(!res.ok) 
                {
                    throw Error("not found")
                }
                return res.json()
            })
            .then((data)=>{
                setData(data)
                setIsLoading(false)
                setError(null)
            })
            .catch((err)=>{
                setIsLoading(false)
                setError(err.message)
            })
        },1000)
    },[url])   
    return { data, isLoading, error }
}

export default useFetch;