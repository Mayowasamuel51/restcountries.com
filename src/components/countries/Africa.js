import { useCallback, useEffect, useState } from "react";
import Navbar from "../Navbar";


function Africa() {
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
            console.log(err.message)
            setError(err.message)
        }
    }, [])
    useEffect(() => {
        fetchCountries()
    }, [fetchCountries])

    let content = '';
    if (error) {
        content = <h1 className="" style={{ color: 'red', fontSize: '40px', textAlign: 'center' }}>  ERROR   WITH SERVER OR NETWORK</h1>
    }
    if (isLoading) {
      content =   <div><h1 style={{ color: 'green', fontWeight: 'bolder', fontSize: '40px', textAlign: 'center' }}>LOADING RESULT PLEASE WAIT ..................................</h1></div>
    } else {
        content = <div className="row">
            {data.filter((item) => {
                return item.region
                    === 'Africa'
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
                            </div>
                        </div>

                    </div>
                )
            })}
        </div>
    }
    return (
        <>
            <div className="">
                <Navbar />
                <br />
                <h1>Africa Countries</h1>
                {content}
            </div>


        </>
    )
}

export default Africa;