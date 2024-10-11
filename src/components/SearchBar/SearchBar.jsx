// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import tag from '../../assets/icons/tag.svg';
import vector from '../../assets/icons/vector.svg';
import './SearchBar.css';

// eslint-disable-next-line react/prop-types
const SearchBar = ({ onSearch, onOptionChange }) => {
  const [searchInput, setSearchInput] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const abrirModal = () => {
    setIsModalOpen(true);
  };

  const fecharModal = () => {
    setIsModalOpen(false);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    onOptionChange(event.target.value);
  };

  useEffect(() => {
    onSearch(searchInput);
  }, [searchInput]);

  return (
    <><div className="search-andfilter">
      <div className="search-bar">
        <img className="search-icon" src={vector} alt="Search Icon" />
        <input
          className="search-input"
          type="text"
          placeholder="Pesquisar..."
          value={searchInput}
          onChange={handleChange} />
      </div>
      <button onClick={abrirModal} className="search-button">
          <img src={tag} alt="Tag Icon" />
        </button>
      {isModalOpen && (
        <div className="background-blur" onClick={fecharModal} />
      )}
      {isModalOpen && <div className="modal-container">
        <div className={`modal ${isModalOpen ? '' : 'hidden'}`}>
          <h4>Ordena por:</h4>
          <div className="modal-content">
            <div className="modal-options">
              <label>
                <input
                  type="radio"
                  value="option1"
                  checked={selectedOption === 'option1'}
                  onChange={handleOptionChange}
                  className="modal-radio" />
                Número
              </label>
              <label>
                <input
                  type="radio"
                  value="option2"
                  checked={selectedOption === 'option2'}
                  onChange={handleOptionChange}
                  className="modal-radio" />
                Nome
              </label>
            </div>
          </div>
        </div>
      </div>}
    </div>
    </>
  );
};
export default SearchBar;
