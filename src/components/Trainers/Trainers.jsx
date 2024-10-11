import React, { useContext, useEffect, useState } from 'react';
import { TrainerContext } from '../../contexts/TrainerContext';
import useFilteredPokemons from '../../services/FilteredPokemons';
import { getTrainerById } from '../../services/trainers';
import PokemonModal from '../PokemonCard/PokemonCard';
import PokemonList from '../PokemonList/PokemonList';
import SearchBar from '../SearchBar/SearchBar';
import './Trainers.css';

const Trainers = ({ trainerId }) => {
  const [trainer, setTrainer] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [currentPokemonIndex, setCurrentPokemonIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('option1');

  const filteredPokemons = useFilteredPokemons({
    trainerId,
    searchTerm,
    sortOption,
  });

  const allTrainers = useContext(TrainerContext);

  useEffect(() => {
    const fetchTrainer = async () => {
      try {
        setIsLoading(true);
        const trainerData = await getTrainerById(trainerId);
        setTrainer(trainerData);
        setIsLoading(false);
      } catch (e) {
        setError(e);
        setIsLoading(false);
      }
    };
    
    if (trainerId) {
      fetchTrainer();
    }
  }, [trainerId]);

  const selectedTrainer = allTrainers.data.find(t => t.id === trainerId)|| {};
  const availablePokemons = selectedTrainer?.pokemons || [];
  const listSize = trainer?.pokemons.length || 0;

  const handlePokemonClick = (pokemon) => {
    const currentIndex = trainer.pokemons.findIndex(p => p.id === pokemon.id);
    setSelectedPokemon(pokemon);
    setCurrentPokemonIndex(currentIndex);
  };

  const toggleShowModal = () => {
    setSelectedPokemon(null);
  };

  const handleNextClick = () => {
    if (listSize > 0) {
      const nextIndex = (currentPokemonIndex + 1 + listSize) % listSize;
      setCurrentPokemonIndex(nextIndex);
      setSelectedPokemon(trainer.pokemons[nextIndex]);
    }
  };
  
  const handlePrevClick = () => {
    if (listSize > 0) {
      const prevIndex = (currentPokemonIndex - 1 + listSize) % listSize;
      setCurrentPokemonIndex(prevIndex);
      setSelectedPokemon(trainer.pokemons[prevIndex]);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch(event.key) {
      case 'ArrowLeft':
        handlePrevClick();
        break;
      case 'ArrowRight':
        handleNextClick();
        break;
      default:
        break;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleNextClick, handlePrevClick]);

  const handleOptionChange = (option) => {
    setSortOption(option);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  if (isLoading) {
    return <div>Carregando o treinador...</div>;
  }

  if (error) {
    return <div>Erro ao carregar o treinador: {error.message}</div>;
  }

  return (
    <div className='trainer-selector'>
      <SearchBar onSearch={handleSearch} onOptionChange={handleOptionChange} />
      {trainer ? (
        <div>
          <h1>{trainer.name}</h1>
          <PokemonList filteredPokemons={filteredPokemons} pokemons={availablePokemons.map(p => p.id)} listSize={listSize} onPokemonClick={handlePokemonClick} />
          {selectedPokemon && (
            <PokemonModal
              pokemon={selectedPokemon}
              toggleShowModal={toggleShowModal}
              handleNextClick={handleNextClick}
              handlePrevClick={handlePrevClick}
              currentPokemonIndex={currentPokemonIndex}
            />

          )}
        </div>
      ) : (
        <div>Selecione um treinador</div>
      )}
    </div>
  );
};
export default Trainers;
