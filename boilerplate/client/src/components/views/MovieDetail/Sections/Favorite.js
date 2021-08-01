import React, { useEffect } from 'react';
import axios from 'axios';

function Favorite(props) {
  const movieId = props.movieId;
  const userFrom = props.userFrom;
  const movieTitle = props.movieInfo.title;
  const moviePost = props.movieInfo.backdrop_path;
  const movieRunTime = props.movieInfo.runtime;

  useEffect(() => {
    let variables = {
      userFrom,
      movieId,
    };
    axios.post('/api/favorite/favoriteNumber', variables).then((res) => {
      console.log(res.data);
      if (res.data.success) {
      } else {
        alert('숫자 정보를 가져오는데 실패했습니다.');
      }
    });

    axios.post('/api/favorite/favorited', variables).then((res) => {
      if (res.data.success) {
      } else {
        alert('정보를 가져오는데 실패했습니다.');
      }
    });
  }, []);

  return (
    <div>
      <button>Favorite</button>
    </div>
  );
}

export default Favorite;
