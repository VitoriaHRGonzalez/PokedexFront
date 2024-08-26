import React from 'react';
import arrow from '../../assets/icons/arrow.svg';
import arrow2 from '../../assets/icons/arrow2.svg';
import pokeball from '../../assets/icons/pokeball.svg';
import { getPokemonImageUrl } from '../../services/trainers';
import './BackgroundColor.css';
import './PokemonCard.css';

const FormatoId = (num) => {
  return num.toString().padStart(3, '0');
};
const PrimeiraLetraMaiuscula = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

function PokemonModal({pokemon, toggleShowModal, handlePrevClick, handleNextClick, currentPokemonIndex }) {
  if (!pokemon) {
    return null;
  }

  const { type = [], moves = [], stats = [], weight, height, name, id } = pokemon;
  
  const displayImage = getPokemonImageUrl(id);

  return (
    <>
      <div id='card' className={`background-pokemon ${type[0]?.toString().toLowerCase()}`}>
        <img className='pokeballCard-image' src={pokeball} alt="Pokeball" />
        <div className="pokemon-head">
          <h2>{name}</h2>
          <p className="pokemonCard-id">#{FormatoId(id)}</p>
        </div>
        <div className="card-info">
          <img className="pokemonCard-img" src={displayImage} alt={name} />
          <div className="types-container">
            {type[0] && (
              <p className={`pokemon-types ${type[0]?.toString().toLowerCase()}`}>
                {PrimeiraLetraMaiuscula(type[0]?.toString().toLowerCase() + ' ')}
              </p>
            )}
            {type[1]?.type?.name && (
              <p className={`pokemon-types ${type[1]?.toString().toLowerCase()}`}>
                {PrimeiraLetraMaiuscula(type[1]?.toString().toLowerCase() + ' ')}
              </p>
            )}
          </div>
          <h3 className='h3'> About</h3>
          <div className='pokemon-info'>
            <img className='arrow2-image' src={arrow2} onClick={ () => handlePrevClick (currentPokemonIndex)} alt="Previous" />
            <div className='pokemon-weight'>
              <div className='date-weight'>
                <p>{weight} kg</p>
              </div>
              <p style={{ fontSize: 13, marginTop: 3.5 }}>Weight</p>
            </div>
            <div className='pokemon-height'>
              <div className='date-height'>
                <p>{height} m</p>
              </div>
              <p style={{ fontSize: 13, marginTop: 3.5 }}>Height</p>
            </div>
            <div className='pokemon-moves'>
              {moves.length > 0 && moves.map((move, index) => (
                <p key={index}>
                  {move}
                </p>
              ))}
              <p style={{ fontSize: 13, marginTop: 0, color: 'gray' }}>Moves</p>
            </div>
            <img className='arrow-image' src={arrow} onClick={() => handleNextClick(currentPokemonIndex)} alt="Next" />
          </div>
          <h3 className='h3'>Base Stats</h3>
          <div className='base-stats'>
            <div className={`base-stats-names ${type[0]?.toString().toLowerCase()}`} style={{ background: 0 }}>
              <p>HP</p>
              <p>ATK</p>
              <p>DEF</p>
              <p>SATK</p>
              <p>SDEF</p>
              <p>SPD</p>
            </div>
            <div className='base-stats-date'>
              <p>{stats.hp}</p>
              <p>{stats.attack}</p>
              <p>{stats.defense}</p>
              <p>{stats.specialAttack}</p>
              <p>{stats.specialDefense}</p>
              <p>{stats.speed}</p>
            </div>
            
            <div className='aaa'>
                <React.Fragment>
                  <div className={`progress-bar ${type[0]?.toString().toLowerCase()}`}></div>
                  <div className={`progress-bar-fill ${type[0]?.toString().toLowerCase()}`} style={{ width: `${stats.hp}px` }}></div>

                  <div className={`progress-bar ${type[0]?.toString().toLowerCase()}`}></div>
                  <div className={`progress-bar-fill ${type[0]?.toString().toLowerCase()}`} style={{ width: `${stats.attack}px` }}></div>

                  <div className={`progress-bar ${type[0]?.toString().toLowerCase()}`}></div>
                  <div className={`progress-bar-fill ${type[0]?.toString().toLowerCase()}`} style={{ width: `${stats.defense}px` }}></div>

                  <div className={`progress-bar ${type[0]?.toString().toLowerCase()}`}></div>
                  <div className={`progress-bar-fill ${type[0]?.toString().toLowerCase()}`} style={{ width: `${stats.specialAttack}px` }}></div>

                  <div className={`progress-bar ${type[0]?.toString().toLowerCase()}`}></div>
                  <div className={`progress-bar-fill ${type[0]?.toString().toLowerCase()}`} style={{ width: `${stats.specialDefense}px` }}></div>

                  <div className={`progress-bar ${type[0]?.toString().toLowerCase()}`}></div>
                  <div className={`progress-bar-fill ${type[0]?.toString().toLowerCase()}`} style={{ width: `${stats.speed}px` }}></div>
                </React.Fragment>
            </div>
          </div>
        </div>
      </div>
      <div className='modal-backdrop' onClick={toggleShowModal}>
      </div>
    </>
  );
}
export default PokemonModal;
