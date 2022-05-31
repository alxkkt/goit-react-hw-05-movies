import { useState, useEffect, useRef } from 'react';

import GalleryItem from './GalleryItem';

import { getTrendingMovies } from 'shared/services/movies';

import s from './Gallery.module.css';

const Gallery = () => {
  const [state, setState] = useState({
    items: [],
    loading: false,
    error: null,
  });
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
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
  const { items, loading, error } = state;

  return (
    <>
      {loading && <p>...Loading</p>}
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
