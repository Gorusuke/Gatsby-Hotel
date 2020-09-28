import React, { Fragment } from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import Image from 'gatsby-image';
import styled from '@emotion/styled'


const H2 = styled.h2`
    text-align: center;
    margin-top: 4rem;
    font-size: 4rem;
`;

const Contenedor = styled.div`
    padding-top: 4rem;
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;

    @media(min-width: 768px){
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 2rem;
    }

    p{
        line-height: 1.8;
    }

`;

const ContenidoInicio = () => {

    const informacion = useStaticQuery(graphql`
        query{
            allDatoCmsPagina(filter: {slug: {eq: "inicio"}}){
                nodes{
                    titulo
                    contenido
                    imagen{
                        fluid{
                            ...GatsbyDatoCmsFluid
                        }
                    }
                    
                }
            }
        }
    `);

    const {titulo, contenido, imagen} = informacion.allDatoCmsPagina.nodes[0];

    return (
        <Fragment>
            <H2>{titulo}</H2>
            <Contenedor>
                <p>{contenido}</p>
                <Image fluid={imagen.fluid} />
            </Contenedor>
        </Fragment>
    );
}
 
export default ContenidoInicio;