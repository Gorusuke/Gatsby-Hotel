import React from 'react';
import {Link} from 'gatsby'
import Nav from './nav';
import './header.css';


const Header = () => {
    return (
        <header>
            <div className="contenedor">
                <Link to={'/'} className="link">
                    <h1>Gatsby Hotel</h1>
                </Link>
                <Nav />
            </div>
        </header>
    );
}
 
export default Header;