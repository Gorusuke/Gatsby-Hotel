import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import styled from '@emotion/styled'

const Img = styled(BackgroundImage)`
    height: 100vh;
`;

const Contenedor = styled.div`
    background-image: linear-gradient(to top, rgba(34,49,63,.35), rgba(34,49,63,.35) );
    color: #fff;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: center;

    h1{
        font-size: 4rem;
        margin: 0;

        @media(max-width: 768px){
            text-align: center;
        }
    }

    p{
        font-size: 2rem;
        margin-top: 0;
        letter-spacing: .75px;

        @media(max-width: 768px){
            text-align: center;
        }
    }
`;

const ImagenHotel = () => {

    const {image} = useStaticQuery(graphql`
        query{
            image: file(relativePath:{eq: "destacada.jpg"}){
                sharp: childImageSharp{
                    fluid{
                        srcSetWebp
                    }
                }
            }
        }
    `);
    // console.info(image.sharp.fluid)

    return (
        <Img tag="section" fluid={image.sharp.fluid} fadeIn="soft">
            <Contenedor>
                <h1>Bienvenido a Gatsby Hotel</h1>
                <p>El mejor hotel para tus vacaciones</p>
            </Contenedor>
        </Img>
    );
}
 
export default ImagenHotel;