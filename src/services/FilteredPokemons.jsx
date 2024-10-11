import { useContext, useEffect, useState } from 'react';
import { TrainerContext } from '../contexts/TrainerContext';



export default function useFilteredPokemons({searchTerm, sortOption, trainerId}) {
  const [filteredPokemons, setFilteredPokemons] = useState([]);

  const allTrainers = useContext(TrainerContext);
  const selectedTrainer = allTrainers.data.find(t => t.id === trainerId)|| {};
  const availablePokemons = selectedTrainer?.pokemons || [];

  

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
