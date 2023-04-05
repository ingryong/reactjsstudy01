import { useEffect, useState } from 'react';
import MovieList from '../components/MovieList';

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const response = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`);

    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  console.log(movies);

  return (
    <div className="App">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map(item => (
            <MovieList
              key={item.id}
              id={item.id}
              medium_cover_image={item.medium_cover_image}
              title={item.title}
              summary={item.summary}
              date_uploaded={item.date_uploaded}
              genres={item.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
