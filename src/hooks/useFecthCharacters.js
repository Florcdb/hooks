export const fetchData = () => {
    return fetch('https://pokeapi.co/api/v2/pokemon/1')
      .then(response => {
        if (!response.ok) {
          throw new Error('Fallo en la red');
        }
        return response.json();
      })
      .catch(error => {
        console.error('Hubo un problema con el fetch:', error);
      });
  };
  
  export const fetchData2 = () => {
    return fetch('https://rickandmortyapi.com/api/character/1')
      .then(response => {
        if (!response.ok) {
          throw new Error('Fallo en la red');
        }
        return response.json();
      })
      .catch(error => {
        console.error('Hubo un problema con el fetch:', error);
      });
  };
  