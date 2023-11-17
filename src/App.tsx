import React, {FunctionComponent, useState} from 'react';
import POKEMONS from './models/mock-pokemon';
import Pokemon from './models/pokemon';
  
const App: FunctionComponent = () => {
 const [pokemon] = useState<Pokemon[]>(POKEMONS);
    
 return (
    <div>
        <h1>Pokédex</h1>
        <h4>Il y'a {pokemon.length} Pokemons dans le Pokedex.!</h4>
    </div>
 )
}
  
export default App;