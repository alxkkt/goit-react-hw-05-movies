import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { getMovieByQuery } from 'shared/services/movies';

import Searchbar from 'shared/components/Searchbar';
import GalleryItem from 'components/Gallery/GalleryItem';

import s from './MoviesPage.module.css';

const MoviesPage = () => {
  const [loader, setLoader] = useState({
    items: [],
    loading: false,
    error: null,
  });

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    const fetchPosts = async () => {
      setLoader(prevState => ({ ...prevState, loading: true }));
      try {
        const result = await getMovieByQuery(query);
        setLoader(prevState => ({
          ...prevState,
          loading: false,
          items: result,
        }));
      } catch (error) {
        setLoader(prevState => ({
          ...prevState,
          loading: false,
          error: error.message,
        }));
      }
    };
    if (query) {
      fetchPosts();
    }
  }, [query]);

  const handleSubmit = ({ query }) => setSearchParams({ query });

  const { items } = loader;

  const isData = Boolean(items.length);

  return (
    <>
      <div className={s.searchContainer}>
        <Searchbar onSubmit={handleSubmit} />
        {isData && (
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
