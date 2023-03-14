import {Link} from 'react-router-dom'

function NavbarPopulation() {
    return (
        <>
            <ul className="nav justify-content-center mt-5">
                <li className="nav-item">
                   <Link to="/population/below500"><button className="btn btn-dark">Below 500k</button></Link>
                </li>
                <li className="nav-item">
                   <Link to="/Europe" className='ms-4'><button className="btn btn-dark fw-bolder">Below 1m</button></Link>
                </li>
                <li className="nav-item">
                <Link to="/" className='ms-4'><button className="btn btn-info fw-bolder">1m --- 10m </button></Link>
                </li>
                <li className="nav-item">
                <Link to="/search" className='ms-4'><button className="btn btn-info fw-bolder">10m --- 40m</button></Link>
                </li>

                <li className="nav-item">
                <Link to="/population" className='ms-4 '><button className="btn btn-info fw-bolder">50m above</button></Link>
                </li>

                <li className="nav-item">
                <Link to="/" className='ms-4 '><button className="btn btn-info fw-bolder">Home</button></Link>
                </li>
            </ul>
        </>
    )
}


export default NavbarPopulation;