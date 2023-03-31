import { useEffect, useState } from 'react';

function App() {
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
            <div key={item.id}>
              <img src={item.medium_cover_image} />
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <p>{item.date_uploaded}</p>
              <p>
                {item.genres.map(g => (
                  <span key={g}> • {g} </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
