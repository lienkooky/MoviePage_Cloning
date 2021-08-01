import React, { useEffect, useState } from 'react';
import { API_KEY, API_URL, IMAGE_BASE_URL } from '../../Config';
import MainImage from '../LandingPage/Sections/MainImage';
import MovieInfo from './Sections/MovieInfo';

function MovieDetail(props) {
  let movieId = props.match.params.movieId;
  const [Movie, setMovie] = useState([]);

  useEffect(() => {
    const endPointCrew = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
    const endPointInfo = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
    fetch(endPointInfo)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovie(data);
      });
  }, []);

  return (
    <div>
      <MainImage
        image={`${IMAGE_BASE_URL}w1280${Movie.backdrop_path}`}
        title={Movie.original_title}
        text={Movie.overview}
      />
      <div style={{ width: '85%', margin: '1rem auto' }}>
        <br />
        <MovieInfo movie={Movie} />
        <div
          style={{ display: 'flex', justifyContent: 'center', margin: '2rem' }}
        >
          <button>Toggle Actor View</button>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
