import React, { useState, useEffect }  from 'react';
import { ButtonNext, Container } from './styles/Main.styles';
import  Frase  from './components/Frase.component';

function App() {

  const [ frase , setFrase ] = useState({});
  const APIBreaking = async () => {
    const resultAPI = await fetch("https://breaking-bad-quotes.herokuapp.com/v1/quotes");
    const frases     = await resultAPI.json();
    setFrase( frases[0] )
  }

  useEffect( ()=> {
    APIBreaking();
  }, [] )

  return (
    <Container>
      <Frase
        frase={frase}
      />
      <ButtonNext
        onClick={ () => APIBreaking( )}
      >
          Obtener Frase
      </ButtonNext>
    </Container>
  );
}

export default App;
