

export default function Locations(props) {
    const  {locations , setLocations }= props;
    const resetLocations = () => {
        setLocations(null);
      }
  return (
    <div className="characters">
        <h1>Ubicacion</h1>
        <span className="back-home" onClick={resetLocations}>Volver al Home</span>
        <div className="container-characters">
            {locations.map((location , index ) => (
                <div className="character-container" key={index}>
                     
                    <div>
                        <h3>{location.name}</h3>
                    </div>
                    <div>
                        <span className="text-grey"> Tipo : </span>
                        <span>{location.type}</span>
                    </div>
                    <div>
                    <span className="text-grey"> Dimension : </span>
                        <span>{location.dimension}</span>
                    </div>
                    <div>
                    <span className="text-grey">  : </span>
                        <span>{location.dimension}</span>
                    </div>
                    
                    
                    
                </div>
            ))}
        </div>
        <span className="back-home" onClick={resetLocations}>Volver al Home</span>
    </div>
  );
}
