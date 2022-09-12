import { Link } from 'react-router-dom';

type MovieItemProps = {
  movieTitle: string,
  moviePoster: string,
  movieId: number,
  setActiveMovie: (id: number) => void
}

function MovieItem({ movieTitle, moviePoster, movieId, setActiveMovie }: MovieItemProps): JSX.Element {
  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={() => setActiveMovie(movieId)}
    >
      <div className="small-film-card__image">
        <img src={moviePoster} alt={movieTitle} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link to={`/films/${movieId}`} title={`/films/${movieId}`} className="small-film-card__link">
          {movieTitle}
        </Link>
      </h3>
    </article>
  );
}

export default MovieItem;
