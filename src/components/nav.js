import React from 'react';
import {Link} from 'gatsby';
import './nav.css';


const Nav = () => {
    return (
        <nav>
            <Link
                to={'/'}
                className="link"
                activeClassName="pagina-actual"
            >Inicio</Link>
            <Link 
                to={'/nosotros'}
                className="link"
                activeClassName="pagina-actual"
            >Nosotros</Link>
        </nav>
    );
}
 
export default Nav;