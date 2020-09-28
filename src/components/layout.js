import React, { Fragment } from 'react';
import Header from './header';
import Footer from './footer';
import Helmet from 'react-helmet';
import UseSeo from '../hooks/useSeo';
import './layout.css'


const Layout = (props) => {

    const seo = UseSeo();

    const {fallbackSeo:{title, description}} = seo;

    return (
        <Fragment>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
                 
            </Helmet>
            <Header />
            {props.children}
            <Footer
                title={title}
            />
        </Fragment>
    );
}

export default Layout;