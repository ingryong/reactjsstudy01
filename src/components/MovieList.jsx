import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

function MovieList({ id, medium_cover_image, title, summary, date_uploaded, genres }) {
  return (
    <div key={id}>
      <img src={medium_cover_image} alt={title} />
      <h3>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h3>
      <p>{summary}</p>
      <p>{date_uploaded}</p>
      <p>
        {genres.map(g => (
          <span key={g}> • {g} </span>
        ))}
      </p>
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
