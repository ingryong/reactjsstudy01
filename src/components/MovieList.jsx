import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import style from './MovieList.module.css';

function MovieList({ id, medium_cover_image, title, summary, year, genres }) {
  return (
    <div key={id} className={style.movie}>
      <img src={medium_cover_image} alt={title} className={style.movie__img} />
      <div>
        <h3 className={style.movie__title}>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h3>
        <p className={style.movie__year}>{year}</p>
        <p>{summary.length > 120 ? `${summary.slice(0, 120)}...` : summary}</p>
        <ul className={style.movie__genres}>
          {genres.map(g => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

MovieList.propTypes = {
  id: propTypes.number.isRequired,
  medium_cover_image: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  genres: propTypes.arrayOf(propTypes.string).isRequired,
};
export default MovieList;
