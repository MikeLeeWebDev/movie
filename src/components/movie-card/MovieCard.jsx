import React from 'react';

import './movie-card.scss';

import { Link } from 'react-router-dom';

import Button from '../button/Button';

import { category } from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';

const MovieCard = (props) => {
  const item = props.item;
  const link = '/' + category[props.category] + '/' + item.id;

  const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);

  const onClickMovieCard = (movie) => {
    movie.category = props.category;
    let movieRecent = JSON.parse(localStorage.getItem('moves-recent')) || [];
    let newMovieRecent;

    if (movieRecent && movieRecent.length && isNaN(movieRecent[0])) {
      let newArr = [movie, ...movieRecent];
      newMovieRecent = newArr
        .reduce((a, b) => {
          if (a) {
            if (
              a.find((i) => {
                return b.backdrop_path === i.backdrop_path;
              })
            ) {
              return [...a];
            } else {
              return [...a, b];
            }
          }
          return [b];
        }, [])

        .slice(0, 5);
    } else {
      newMovieRecent = [movie];
    }
    localStorage.setItem('moves-recent', JSON.stringify(newMovieRecent));
  };

  return (
    <Link to={link}>
      <div
        className='movie-card'
        style={{ backgroundImage: `url(${bg})` }}
        onClick={() => onClickMovieCard(item)}
      >
        <Button>View</Button>
        <div className='movie-rate'>
          <div className='rate-item'>
            <span className='rate-item-right'>Rating: {item.vote_average}</span>
          </div>
        </div>
      </div>
      <h3>{item.title || item.name}</h3>
    </Link>
  );
};

export default MovieCard;
