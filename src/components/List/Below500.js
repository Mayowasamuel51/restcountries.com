function Below500({ countries }) {
    return (
        <>
            <div className="container  mt-5">
                <div className="row ">
                    <h3>Population Below 500k</h3>
                    
                    {countries.filter((item) => {
                        <h4>Total number  {item.length }</h4>
                        return (  item.population < 500000) 
                        
                    }).map((item, index) => {
                        return (
                            <div className="col-4 text-black  container-fluid " key={index}    >
                                <hr></hr>
                                
                                <h3 className="h2 fw-bold text-center">{item.status}</h3>
                                <div className="card mt-4 " style={{ padding: '10px', boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}>
                                    <h4>{item.name.official}</h4>
                                    <div className="mt-4">
                                        <img src={item.flags.png} style={{ width: '100%', boxSizing: 'border-box', height: '190px' }} />
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
            </div>
        </>
    )
}

export default Below500;