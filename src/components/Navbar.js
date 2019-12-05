import React  from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return(
        <div className="navbar navbar-inverse">
            <div className="container">
                <div className="navbar-header">
                    <Link className="navbar-brand" to="/">REACT</Link>
                </div>
                <ul className="nav navbar-nav navbar-right">
                    <li> <Link to="/">HOME</Link> </li>
                    <li> <Link to="/about">ABOUT</Link> </li>
                    <li> <Link to="/image">IMAGE</Link> </li>
                    <li> <Link to="/mahasiswa">MAHASISWA</Link> </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;