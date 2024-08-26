import { createContext, useCallback, useContext, useState } from 'react';
import { getAllTrainers } from '../services/trainers.jsx'; // Ajuste o caminho conforme necessário

export const TrainerContext = createContext(null);

export const useGetTrainers = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const getData = useCallback(async (options = {}) => {
    try {
      setIsLoading(true);
      const trainers = await getAllTrainers(options);
      setData(trainers);
      setIsLoading(false);
      return trainers;
    } catch (e) {
      setError(e);
      setIsLoading(false);
      throw e;
    }
  }, []);

  return {
    isLoading,
    error,
    data,
    getData
  };
};

// eslint-disable-next-line react/prop-types
export const TrainerProvider = ({ children }) => {
  const trainerData = useGetTrainers();

  return (
    <TrainerContext.Provider value={trainerData}>
      {children}
    </TrainerContext.Provider>
  );
};

// Custom hook to use the TrainerContext
export const useTrainerContext = () => {
  const context = useContext(TrainerContext);
  if (!context) {
    throw new Error('useTrainerContext must be used within a TrainerProvider');
  }
  return context;
};
