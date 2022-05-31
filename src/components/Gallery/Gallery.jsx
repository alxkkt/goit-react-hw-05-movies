import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import { getTrendingMovies } from 'shared/services/movies';

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
        <ul>
          {items.map(item => (
            <li key={item.id}>
              <Link to={`/movies/${item.id}`}>{item.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Gallery;
