import {graphql, useStaticQuery} from 'gatsby'


const UseHabitaciones = () => {

    const data = useStaticQuery(graphql`
        query{
            allDatoCmsHabitacion{
                nodes{
                    titulo
                    slug
                    id
                    contenido
                    imagen{
                        fluid(maxWidth: 1200){
                            ...GatsbyDatoCmsFluid
                        }
                    }
                    
                }
            }
        }
    `);

    return data.allDatoCmsHabitacion.nodes.map(habitacion => ({
        titulo: habitacion.titulo,
        id: habitacion.id,
        slug: habitacion.slug,
        contenido: habitacion.contenido,
        imagen: habitacion.imagen,
    }))
}
 
export default UseHabitaciones;