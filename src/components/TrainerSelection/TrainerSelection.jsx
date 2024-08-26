import React, { useEffect } from 'react';
import { useTrainerContext } from '../../contexts/TrainerContext.jsx';
import TrainerList from '../TrainerList/TrainerList.jsx';

const TrainerSelection = ({ handleSelectTrainer }) => {
  const { data: trainers, isLoading, error, getData } = useTrainerContext();

  useEffect(() => {
      getData()
  }, []);
  if (isLoading) {
    return <div>Carregando os trainers...</div>;
  }
  if (error) {
    return <div>Erro ao carregar os trainers: {error.message}</div>;
  }
  return (
    <TrainerList  onSelectTrainer={handleSelectTrainer} trainers={trainers} />
  );
};
export default TrainerSelection;
