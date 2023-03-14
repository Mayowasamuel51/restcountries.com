import Countries from "./Countries"



function CountriesList(props) {
    return ( 
        <>
            <div>
                {
                    props.countries.map((item, index) => {
                        <Countries
                            key={index}
                            population={item.population}
                            flags={item.flags.png}
                            area={item.area}
                        />
                    })
                }

            </div>        
        </>
    )
}

export default CountriesList;