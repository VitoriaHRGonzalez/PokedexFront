import { useEffect, useState } from 'react';

export default function FilteredPokemons({availablePokemons, searchTerm, sortOption}) {
  const [filteredPokemons, setFilteredPokemons] = useState([]);

  console.log('availablePokemons:', availablePokemons);

  useEffect(() => {
    if(availablePokemons) {
      let filtered = availablePokemons.filter(pokemon => pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()));
      if(sortOption === 'option1') {
        filtered.sort((a, b) => a.id - b.id);
      } else if(sortOption === 'option2') {
        filtered.sort((a, b) => a.name.localeCompare(b.name));
      }
      setFilteredPokemons(filtered);
    }
  }, [availablePokemons, searchTerm, sortOption]);


  return filteredPokemons;
}
