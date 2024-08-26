import React from 'react';

import './TrainerList.css';

const TrainerList = ({ onSelectTrainer, trainers = [] }) => {
  return (
    <div class="trainer-list">
      <h1 className='H1'>Selecione o seu Treinador</h1>
      <div className='containerTrainer'>
      <ul>
        <div className='CardTrainer'>
        {trainers.map(trainer => (
          <div key={trainer.id} >
          <img className='Trainer1' src={trainer.imageUrl} onClick={() => onSelectTrainer(trainer.id)} />
          <li key={trainer.id}> {trainer.name} </li>
          </div>
        ))}
        </div>
      </ul>
      </div>
    </div>
  );
};

export default TrainerList;
