import { useCallback, useEffect, useState } from "react";
import Navbar from "../Navbar";


function Europe() {
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
            // i did not handle the error 
        }
    },[])
    useEffect(() => {
        fetchCountries()
    }, [fetchCountries])
    return (
        <>
            <div className="row">
                <Navbar />
                <br />
                <h1>Europe Countries</h1>
                {data.filter((item) => {
                    return item.region
                        === 'Europe'
                }).map((item, index) => {
                    return (
                        <div className="col-4 text-black  container-fluid " key={index}    >
                            <hr></hr>
                            <h3 className="h2 fw-bold text-center">{item.status}</h3>
                            <div className="card mt-4 " style={{ padding: '10px' }}>
                                <h4>{item.name.official}</h4>
                                <div className="mt-4">
                                    <img className="card-img-top image-fluid" alt="..." src={item.flags.png} style={{ width: '100%', boxSizing: 'border-box', height: '160px' }} />
                                    <br />

                                </div>
                                <div className="fw-bold mt-4">
                                    <p className="fw-bold">Population-- <span>{item.area}</span></p>
                                    <p className="fw-bold">Region-- <span>{item.region}</span></p>
                                    <p className="fw-bold">Time Zones-- <span>{item.timezones[0]}</span></p>
                                    <p className="">Subregion-- <span>{item.subregion}</span></p>
                                    <br></br>
                                    <hr></hr>
                                    <div className="d-flex justify-content-space-between">
                                        
                                        {/* <h2 className="mt-2 ps-3">{item.car.side}</h2> */}
                                    </div>
                                </div>
                            </div>

                        </div>
                    )
                })}
            </div>


        </>
    )
}

export default Europe;