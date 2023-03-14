import { useCallback, useEffect, useState } from "react";
import Below500 from "../List/Below500";
import NavbarPopulation from "./NavbarPopulation.";




function Population500() {
    const [data, setData] = useState([])
    const [isLoading, setisLoading] = useState(true)
    const [error, setError] = useState(null)

    const fetchCountries = useCallback(async () => {
        setisLoading(true)
        setError(null)
        try {
            const response = await fetch('https://restcountries.com/v3.1/all')
            const data = await response.json()
            // console.log(data)
            setData(data)
            setisLoading(false)

        } catch (err) {
            console.log(err.message)
            setError(err.message)
        }
    }, [])
    useEffect(() => {
        fetchCountries()
    }, [fetchCountries])

    let container = '';
    if (isLoading) {
        container = <div>
            <h1 style={{ color: 'green', fontWeight: 'bolder', fontSize: '40px', textAlign: 'center' }}>LOADING RESULT PLEASE WAIT ..................</h1>
        </div>
    } else {
        container =  <Below500 countries={data}/>
    }

    return ( 
        <>
            <NavbarPopulation/>
            
            <div>
           {container}
          </div>
        
        
        </>
    )
}


export default Population500;