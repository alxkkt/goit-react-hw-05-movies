import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import { getMovieCredits } from '../../shared/services/movies';
import getPosterLink from '../../shared/services/posterLink';

import s from './Cast.module.css';

const Cast = () => {
  const [state, setState] = useState({
    cast: [],
    loading: false,
    error: false,
  });
  const { movieId } = useParams();

  useEffect(() => {
    const fetchReview = async (id: string) => {
      const data = await getMovieCredits(id);
      setState(prevState => ({
        ...prevState,
        cast: data,
        loading: false,
      }));
    };

    try {
      setState(prevState => ({ ...prevState, loading: true }));
      fetchReview(movieId!);
    } catch (error: any) {
      setState(prevState => ({
        ...prevState,
        loading: false,
        error: error.message,
      }));
    }
  }, [movieId]);

  const { cast, loading } = state;
  const isData = Boolean(cast.length);
  return (
    <>
      {loading && <p>...Loading</p>}
      {isData && (
        <ul className={s.gridList}>
          {cast.map(({ id, name, profile_path, character }) => (
            <li key={id} className={s.listItem}>
              <div className={s.itemContainer}>
                <img src={getPosterLink(profile_path)} alt={name} />
                <div className={s.actorInfo}>
                  <h2 className={s.actorName}>{name}</h2>
                  <h3 className={s.actorChar}>Character: {character}</h3>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Cast;
