import { useState, useEffect } from 'react';

function useProducts(){
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(()=>{
        // const timeout = setTimeout(() => {
            const consumirApi = async () => {
                try{
                    const response = await fetch('https://api.escuelajs.co/api/v1/products')
                    const data = await response.json()
                    setData(data)
                    setLoading(false)
                }catch(e){
                    setLoading(false)
                    setError(true)
                    console.log('Error: ', e)
                }
            }
            consumirApi()
        // }, 2000)
        // return () => clearTimeout(timeout)
    }, [])
    return {data, loading, error}
}

export { useProducts }