import imageRickMorty from './img/character.png'
import imageLocation from './img/location.png'
import imageSchema from './img/schema.png'
import './App.css';
import { useState } from 'react';
import Characters from './components/Characters';
import Locations from './components/Locations';
import Episodes from './components/Episodes';


function App() {

  const [characters, setCharacters] = useState(null);
  const reqApi = async() => {
    
    const api = await fetch("https://rickandmortyapi.com/api/character")
    const characterApi = await api.json();
    console.log(characterApi)
    setCharacters(characterApi.results)
    
  }
  const[locations,setLocations] = useState (null);
  const reqLoc = async () => {
    const apiLoc = await fetch ("https://rickandmortyapi.com/api/location")
    const locationApi= await apiLoc.json();

    setLocations(locationApi.results)
  }

  const[episodes,setEpisodes] = useState (null);
  const reqEpi = async () => {
    const apiEpi = await fetch ("https://rickandmortyapi.com/api/episode")
    const episodeApi= await apiEpi.json();

    setEpisodes(episodeApi.results)
  }


  


   
  return (
    <div className="App">
      <header className="App-header">
       <h1 className="title">Rick and morty</h1>
        
        {characters ? (
        <Characters characters={characters} setCharacters={setCharacters}/>
      ) : (
        <>
        <img src={imageRickMorty} alt = "character " className='img-home'></img>
        <button onClick={reqApi} className='btn-search'> 
        Buscar Personaje
        </button>
        </>
        
        
      )}
        
     
      { locations ? (
      <Locations locations={locations} setLocations={setLocations}/>
      ):(
        <>
        <img src={imageLocation} alt='location' className='img-home'></img>
        <button onClick={reqLoc} className='btn-search'>
          Buscar Ubicacion
        </button>
        </>
      )}

      { episodes ? (
      <Episodes episodes={episodes} setEpisodes={setEpisodes}/>
      ):(
        <>
        <img src={imageSchema} alt='episode' className='img-home'></img>
        <button onClick={reqEpi} className='btn-search'>
          Buscar Episodio
        </button>
        </>
      )}
        
        
        </header>
    </div>
    
  );
  
}

export default App;
