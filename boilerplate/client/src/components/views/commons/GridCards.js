import React from 'react';
import { Col } from 'antd';

function GridCards({ image, movieId, movieName, landingPage, characterName }) {
  if (landingPage) {
    return (
      <Col log={6} md={8} xs={24}>
        <div style={{ position: `relative` }}>
          <a href={`/movie/${movieId}`}>
            <img
              style={{ width: `100%`, height: '320px' }}
              src={image}
              alt={movieName}
            />
          </a>
        </div>
      </Col>
    );
  } else {
    return (
      <Col log={6} md={8} xs={24}>
        <div style={{ position: `relative` }}>
          <img
            style={{ width: `100%`, height: '320px' }}
            src={image}
            alt={characterName}
          />
        </div>
      </Col>
    );
  }
}

export default GridCards;
