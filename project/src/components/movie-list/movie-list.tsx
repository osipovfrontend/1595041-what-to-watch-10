import { useState } from 'react';
import { Films } from '../../types/film';
import Player from '../player/player';

type MovieListProps = {
  films: Films;
};

function MovieList({films}: MovieListProps): JSX.Element {
  //@typescript-eslint/no-unused-vars-experimental
  const [, setSelectedMovie] = useState({});

  const setSelected = (id: number) => {
    const choosenMovie = films.filter((film) => film.id === id);
    setSelectedMovie(choosenMovie);
  };

  return (
    <div className="catalog__films-list">
      {
        films.map((film) => (
          <Player key={film.id} film={film} setActiveCard={setSelected}/>
        ))
      }
    </div>
  );
}

export default MovieList;
