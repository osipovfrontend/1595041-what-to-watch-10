type MovieItemProps = {
  moveTitle: string,
  movePoster: string
}

function MovieItem({ moveTitle, movePoster }: MovieItemProps): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={movePoster} alt={moveTitle} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">{moveTitle}</a>
      </h3>
    </article>
  );
}

export default MovieItem;
