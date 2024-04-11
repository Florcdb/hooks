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
}

export default App  