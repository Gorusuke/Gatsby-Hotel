import React, { Fragment } from 'react';
import {Link} from 'gatsby'
import Nav from './nav';
import './header.css';


const Footer = ({title}) => {

    const year = new Date().getFullYear()

    return (
        <Fragment>
            <footer>
                <div className="contenedor">
                    <Nav />
                    <Link to={'/'} className="link">
                        <h1>Gatsby Hotel</h1>
                    </Link>                
                </div>
            </footer>
            <p className="parrafo">{title} todos los derechos reservados {year} &copy;</p>
        </Fragment>
    );
}
 
export default Footer;