import React ,{ useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { getMovieByQuery } from '../../shared/services/movies';

import Searchbar from '../../shared/components/Searchbar';
import GalleryItem from '../../components/Gallery/GalleryItem';

import s from './MoviesPage.module.css';

import { Item } from '../../components/Gallery/GalleryItem/GalleryItem';

interface IState {
  items: Item[];
  loading: boolean;
  error: null | Error;
}

const MoviesPage = () => {
  const [loader, setLoader] = useState<IState>({
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
        const result = await getMovieByQuery(query!);
        setLoader(prevState => ({
          ...prevState,
          loading: false,
          items: result,
        }));
      } catch (error: any) {
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

  const handleSubmit = ({ query }: {query: string}) => setSearchParams({ query });

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
