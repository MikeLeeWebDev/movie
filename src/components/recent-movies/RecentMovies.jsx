import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';

import './RecentMovies';

import { SwiperSlide, Swiper } from 'swiper/react';
// import { Link } from 'react-router-dom';

// import Button from '../button/Button';

// import tmdbApi, { category } from '../../api/tmdbApi';
// import apiConfig from '../../api/apiConfig';

import MovieCard from '../movie-card/MovieCard';

const RecentMovieList = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getList = async () => {
      // let response = null;
      // const params = {};

      let movieRecent = JSON.parse(localStorage.getItem('moves-recent')) || [];
      if (movieRecent && Array.isArray(movieRecent)) {
        setItems(movieRecent);
      }
    };
    getList();
  }, []);

  return (
    <div className='movie-list'>
      <Swiper grabCursor={true} spaceBetween={10} slidesPerView={'auto'}>
        {items.map((item, i) => (
          <SwiperSlide key={i}>
            <MovieCard item={item} category={item.category} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

// RecentMovieList.propTypes = {};

export default RecentMovieList;
