import { useCallback, useEffect, useState } from "react";
import CurrencyList from "../List/CurrencyList";
import Navbar from "../Navbar";






function Currency() {
    const [inputSearch, setInputSearch] = useState('');
    const [messageError, setMessageError] = useState(null)
    const [isLoading, setisLoading] = useState(false)
    const [data, setData] = useState([])
    const [error, setError] = useState(false);
    const baseUrl = 'https://restcountries.com/v3.1/currency/'
    const inputHandler = (e) => {
        setInputSearch(e.target.value);
    }
    const fetchData = useCallback( async (name) => {
        setisLoading(true)
        setError(null)
        setMessageError(null)
        try {
            const response = await fetch(`${baseUrl}${name}`)
            if (response.status === 200) {
                const data = await response.json()
                console.log(data)
                setData(data);
            } else if (response.status === 404) {
                const data = await response.json()
                setMessageError(data.message)
                console.log(response.json)
                setData([])
                setInputSearch('')
            }
            setisLoading(false)
        } catch (err) {
            console.log(err)
            setError(err.message)
            if (error instanceof SyntaxError) {
                console.log('There was a SyntaxError', error)
            } else {
                console.log('There was an error', error);

            }
        }
    }, [])
    let content = ''
    if (error) {
        content = <h1 className="" style={{ color: 'red', fontSize: '40px', textAlign: 'center' }}>  ERROR   WITH SERVER OR NETWORK</h1>
    }
    else if (messageError) {
        content = <h1 className="text-danger" style={{ fontSize: '40px', textAlign: 'center' }}>SORRY THIS CURRENCY NAME DOES NOT EXIST</h1>
    } else {
        if (isLoading) {
            content = <div><h1  style={{ color: 'green', fontWeight:'bolder', fontSize: '40px', textAlign: 'center' }}>LOADING RESULT PLEASE WAIT ..................................</h1></div>
        } else {
            content = <CurrencyList countries={data} />
        }
    }

    const btnClick = () => {
        setisLoading(true)
        fetchData(inputSearch)
    }
    return ( 
        <>
             <Navbar />
            <div style={{ marginTop: '100px' }}>
                <div style={{ margin: 'auto', width: '50%' }}>
                    <label className="text-center fw-bolder pb-4">Search Currency </label>
                    <input value={inputSearch} onChange={inputHandler} type="text" className="form-control" placeholder="find Countries by name" />
                    <br />
                    <button onClick={btnClick} className="btn btn-info fw-bolder ">Search</button>

                    <div>
                        {content}
                        {/* <SearchList countries={data} /> */}
                    </div>
                </div>
                <br/>   <br/>   <br/>   <br/>

            </div>
        
        
        
        
        </>
    )
}
export default Currency;