import { useCallback, useEffect, useState } from "react";
import CountriesList    from "./List/Countries";
import Countries from './List/Countries'
import Navbar from "./Navbar";
function AllCountries() {
    const [data, setData] = useState([]);
    const [isLoading, setisLoading] = useState(true)
    const [error, setError] = useState(null)
    const fetchCountries = useCallback(async () => {
        setError(null)
        try {
            const response = await fetch('https://restcountries.com/v3.1/all')
            const data = await response.json()
            console.log(data)
            setData(data)
            setisLoading(false)
            
        } catch (err) {
            
        }
    },[])
    useEffect(() => {
        fetchCountries()
    }, [fetchCountries])
    
    let content = '';
    if (isLoading) {
        content =  <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    } else {
        content =  <Countries  countries={data} />
    }
    return ( 
        <>
            <div className="m-4">
                <Navbar/>
                <br/>
              {content}
            </div>
        </>
    )
}

export default AllCountries;