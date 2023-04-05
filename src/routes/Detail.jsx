import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function Detail() {
  const [data, setData] = useState({});
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
    setData(json.data.movie);
  };
  useEffect(() => {
    getMovie();
  }, []);

  console.log(data);

  return (
    <>
      <div>
        <Link to="/">돌아가기</Link>
      </div>
      <h1>{data.title}</h1>
      <img src={data.large_cover_image} alt="large_cover_image" />
      <p>{data.description_full}</p>
    </>
  );
}

export default Detail;
