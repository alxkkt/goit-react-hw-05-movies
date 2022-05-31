import { useState, useEffect } from 'react';

import s from './MoviesPage.module.css';
import { getMovieByQuery } from 'shared/services/movies';
import Searchbar from 'shared/components/Searchbar';
import GalleryItem from 'components/Gallery/GalleryItem';

const MoviesPage = () => {
  const [query, setQuery] = useState('');
  const [loader, setLoader] = useState({
    items: [],
    loading: false,
    error: null,
  });
  useEffect(() => {
    if (!query) return;

    const fecthByQuery = async query => {
      const data = await getMovieByQuery(query);
      setLoader(prevLoader => ({ ...prevLoader, items: data, loading: false }));
      console.log(data);
    };

    try {
      fecthByQuery(query);
      setLoader(prevLoader => ({
        ...prevLoader,
        loading: false,
      }));
      setQuery('');
    } catch (error) {
      setLoader(prevLoader => ({
        ...prevLoader,
        loading: false,
        error: error.message,
      }));
    }
  }, [query]);

  const handleSubmit = q => setQuery(q);
  const { items } = loader;

  return (
    <>
      <div className={s.searchContainer}>
        <Searchbar onSubmit={handleSubmit} />
        {Boolean(items.length) && (
          <div className={s.container}>
            <ul className={s.gridList}>
              {items.map(item => (
                <GalleryItem key={item.id} {...item} />
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default MoviesPage;
