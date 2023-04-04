import propTypes from 'prop-types';

function Movie({ id, medium_cover_image, title, summary, date_uploaded, genres }) {
  return (
    <div key={id}>
      <img src={medium_cover_image} alt={title} />
      <h3>{title}</h3>
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

Movie.propTypes = {
  medium_cover_image: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  genres: propTypes.arrayOf(propTypes.string).isRequired,
};
export default Movie;
