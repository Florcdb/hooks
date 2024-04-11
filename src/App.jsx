import './App.css';
import { useEffect, useState } from 'react';
import  {fetchData, fetchData2} from './hooks/useFecthCharacters';
import './hooks/useCustomHook'

function App() {
  const [pokemonData, setPokemonData] = useState(null)
  const [rickAndMortyData, setRickAndMortyData] = useState(null)
  
  useEffect(() => {
    fetchData().then((data) => {
      setPokemonData(data);
    });

    fetchData2().then((data) => {
      setRickAndMortyData(data);
      console.log(fetchData)
    });
  }, []);

      return (
        <>
          <h2>Personaje Pokemon</h2>
          {pokemonData && (
            <>
              <h3>{pokemonData.name}</h3>
              <img src={pokemonData.sprites.front_default} alt="Pokemon" />
            </>
          )}
    
          <h2>Personaje Rick and Morty</h2>
          {rickAndMortyData && (
            <>
              <h3>{rickAndMortyData.name}</h3>
              <img src={rickAndMortyData.image} alt="Rick and Morty" />
            </>
          )}
        </>
      );
    }

export default App;
