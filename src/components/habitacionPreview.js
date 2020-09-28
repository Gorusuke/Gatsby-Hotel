import React from 'react';
import Image from 'gatsby-image';
import {css} from '@emotion/core';
import styled from '@emotion/styled';
import {Link} from 'gatsby';


const Boton = styled(Link)`
    margin-top: 2rem;
    padding: 1rem;
    background-color: rgba(44, 62, 80, .85);
    color: white;
    display: block;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
    text-align: center;
`;


const HabitacionPreview = ({habitacion}) => {

    const {titulo, imagen, contenido, slug} = habitacion;

    return (
        <div 
            css={css`
                border: 1px solid #e1e1e1;
                margin-top: 2rem;
            `}
        >
            <Image
                fluid={imagen.fluid}
            />
            <div
                css={css`
                text-align: center;
                padding: 1rem;
            `}
            >
                <h3>{titulo}</h3>
                <p>{contenido}</p>
                <Boton to={slug}>Ver Habitacion</Boton>
            </div>
        </div>
    );
}
 
export default HabitacionPreview;