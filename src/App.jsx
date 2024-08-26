import { useState } from 'react';
import pokeball from './assets/icons/pokeball.svg';
import TrainerSelection from './components/TrainerSelection/TrainerSelection';
import Trainers from './components/Trainers/Trainers';
import { TrainerProvider } from './contexts/TrainerContext';

import './App.css';

function App() {
  const [selectedTrainerId, setSelectedTrainerId] = useState(null);

  const handleSelectTrainer = (id) => {
    setSelectedTrainerId(id);
  };

  return (
    <TrainerProvider>
      <div className='App'>
        <div className='header'>
          <img className='pokeball-image' src={pokeball} alt="Pokeball" />
          <h1>Pokédex</h1>
        </div>
        {!selectedTrainerId ? (
          <TrainerSelection handleSelectTrainer={handleSelectTrainer} data-cy="trainer-selection"/>
        ) : (
          <div>
            <button id="backBtn" onClick={() => setSelectedTrainerId(null)}>Voltar</button>
            <Trainers trainerId={selectedTrainerId} />
          </div>
        )}
      </div>
    </TrainerProvider>
  );
}
export default App;
