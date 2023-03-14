


function SearchList({countries, name}) {
    return ( 
        <>
        
        <div className="container " >
             
            <br></br>
            <div className="r" >
                {countries.map((item, index) => {
                    return (
                        <div className=" " key={index} >
                            <div className="card mt-4 " style={{ padding: '10px', boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}>
                                <img src={item.flags.png} style={{ width: '100%', boxSizing: 'border-box', height: '190px' }} />
                                <h2 className="pt-4">{item.name.common}</h2>
                                <hr />
                                <br />
                                <h4 className="pt-4">Capital {item.capital}</h4> <hr />
                                <h4 className="pt-4">Area <span>{item.area}</span></h4> <hr />
                                <h4 className="pt-4">Population <span>{item.population}</span></h4> <hr />
                                <h4 className="pt-4">Continents <span>{item.continents}</span></h4>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
        
        </>
    )
}

export default SearchList;