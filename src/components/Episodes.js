
export default function Episodes(props) {
    const  {episodes , setEpisodes }= props;
    const resetSchemas = () => {
        setEpisodes(null);
      }
  return (
    <div className="characters">
        <h1>Episodios</h1>
        <span className="back-home" onClick={resetSchemas}>Volver al Home</span>
        <div className="container-characters">
            {episodes.map((episode , index ) => (
                <div className="character-container" key={index}>
                     
                    <div>
                        <h3>{episode.name}</h3>
                    </div>
                
                    <div>
                    <span className="text-grey"> Episodio : </span>
                        <span>{episode.episode}</span>
                    </div>
                   
                    
                    
                    
                </div>
            ))}
        </div>
        <span className="back-home" onClick={resetSchemas}>Volver al Home</span>
    </div>
  );
}
