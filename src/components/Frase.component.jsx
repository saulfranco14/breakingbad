import React from 'react';
import { ContenedorFrase , FraseContenedor, SubtituloContenedor} from '../styles/Main.styles';

const Frase = ( { frase }) => {

    // Verificar si el objeto viene con algo adentro
    // if( Object.keys(frase).length === 0 ) return null;

    return ( 
        <ContenedorFrase>
            <FraseContenedor> “ {frase.quote} </FraseContenedor><br></br>
            <SubtituloContenedor> - {frase.author}</SubtituloContenedor>
        </ContenedorFrase>
     );
}
 
export default Frase;