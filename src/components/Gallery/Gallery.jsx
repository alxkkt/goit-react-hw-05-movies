import { useState, useEffect } from 'react';
import BeatLoader from 'react-spinners/BeatLoader';

import GalleryItem from './GalleryItem';

import { getTrendingMovies } from 'shared/services/movies';

import s from './Gallery.module.css';

const Gallery = () => {
  const [state, setState] = useState({
    items: [],
    loading: false,
    error: null,
  });

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      const data = await getTrendingMovies();

      setState(prevState => ({
        ...prevState,
        items: data,
        loading: false,
      }));
    };

    try {
      setState(prevState => ({ ...prevState, loading: true }));
      fetchTrendingMovies();
    } catch (error) {
      setState(prevState => ({
        ...prevState,
        loading: false,
        error: error.message,
      }));
    }
  }, []);
  const { items, loading } = state;

  return (
    <>
      {loading && (
        <div className={s.BeatLoader}>
          <BeatLoader />
        </div>
      )}
      {Boolean(items.length) && (
        <div className={s.container}>
          <h1 className={s.homepageTitle}>Trending Today</h1>
          <ul className={s.gridList}>
            {items.map(item => (
              <GalleryItem key={item.id} {...item} />
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Gallery;
