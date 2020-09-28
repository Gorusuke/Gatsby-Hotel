import React from "react";
import {css} from '@emotion/core';
import styled from '@emotion/styled';
import Layout from '../components/layout';
import ImagenHotel from '../components/imagenHotel';
import ContenidoInicio from '../components/contenidoInicio';
import HabitacionPreview from '../components/habitacionPreview';
import UseHabitaciones from '../hooks/useHabitaciones';

const Ul = styled.ul`
  max-width: 1200px;
  width: 95%;
  margin: 4rem auto;

  @media(min-width: 768px){
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 3rem
  }

`;

const IndexPage = () => {

  const habitaciones = UseHabitaciones();

  return (
    <Layout>
      <ImagenHotel />

      <ContenidoInicio />

      <h2 
        css={css`
          text-align: center;
          margin-top: 5rem;
          font-size: 3rem;
        `}
      >Nuestras Habitaciones</h2>

      <Ul>
        {habitaciones.map(habitacion => (
          <HabitacionPreview 
            key={habitacion.id}
            habitacion={habitacion}
          />
        ))}
      </Ul>

      



    </Layout>
  )
}

export default IndexPage;