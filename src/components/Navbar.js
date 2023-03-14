import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <>
            <ul className="nav justify-content-center mt-5">
                <li className="nav-item">
                   <Link to="/africa"><button className="btn btn-dark">Africa</button></Link>
                </li>
                <li className="nav-item">
                   <Link to="/Europe" className='ms-4'><button className="btn btn-dark fw-bolder">Europe</button></Link>
                </li>
                <li className="nav-item">
                <Link to="/" className='ms-4'><button className="btn btn-info fw-bolder">All</button></Link>
                </li>
                <li className="nav-item">
                <Link to="/search" className='ms-4'><button className="btn btn-info fw-bolder">Search</button></Link>
                </li>

                <li className="nav-item">
                <Link to="/population" className='ms-4 '><button className="btn btn-info fw-bolder">Population Base</button></Link>
                </li>

                <li className="nav-item">
                <Link to="/currency" className='ms-4 '><button className="btn btn-info fw-bolder">Find currency</button></Link>
                </li>
            </ul>
        </>
    )
}


export default Navbar;