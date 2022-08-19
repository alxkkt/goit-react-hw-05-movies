import {
  useParams,
  Link,
  Outlet,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import BeatLoader from 'react-spinners/BeatLoader';

import { getMovieById } from '../../shared/services/movies';
import getImgLink from '../../shared/services/posterLink';
import s from './MovieDetailsPage.module.css';

type Genre = {
  name: string;
}

type Movie = {
  title: string;
  poster_path: string;
  release_date: string;
  vote_average?: number;
  overview: string;
  genres: Genre[];
}

interface IState {
  movie: null | Movie;
  loading: boolean;
  error: Error | null;
}

interface LocationState {
  from: {
    pathname: string;
  };
}

const MovieDetailsPage = () => {
  const [state, setState] = useState<IState>({
    movie: null,
    loading: false,
    error: null,
  });
  const { movieId } = useParams();

  const navigate = useNavigate();
  const location = useLocation();
  const { from } = location.state as LocationState;

  const goBack = () => navigate(from);

  useEffect(() => {
    const fetchMovieById = async (id: string) => {
      const { data } = await getMovieById(id);
      setState(prevState => ({ ...prevState, movie: data, loading: false }));
    };

    try {
      setState(prevState => ({ ...prevState, loading: true }));
      fetchMovieById(movieId!);
    } catch (error: any) {
      setState(prevState => ({
        ...prevState,
        loading: false,
        error: error.message,
      }));
    }
  }, [movieId]);
  const { movie, loading, error } = state;

  return (
    <>
      {loading && <BeatLoader />}
      {error && <p>{error.message}</p>}
      {movie && (
        <div className={s.container}>
          <button type="button" onClick={goBack} className={s.returnBtn}>
            Go Back
          </button>
          <div className={s.movieCard}>
            <div className={s.movieCardPoster}>
              <img
                src={getImgLink(movie.poster_path)}
                alt="Movie Poster"
                width="360"
              />
            </div>
            <div className={s.movieCardDescr}>
              <h2 className={s.movieCardTitle}>
                {movie.title} ({movie.release_date.slice(0, 4)})
              </h2>
              <p className={s.movieCardScore}>
                User Score: {movie.vote_average}
              </p>
              <h3 className={s.movieCardOverviewTitle}>Overview</h3>
              <p className={s.movieCardOverview}>{movie.overview}</p>
              <h3 className={s.movieCardGenres}>Genres</h3>
              <p>{movie.genres.map(({ name }) => name).join(', ')}</p>
            </div>
          </div>
          <div className={s.additionalInfo}>
            <h4 className={s.additionalInfoTitle}>Additional Information</h4>
            <ul className={s.additionalInfoList}>
              <li className={s.additionalInfoItem}>
                <Link state={{ from }} to={`/movies/${movieId}/cast`}>
                  Cast
                </Link>
              </li>
              <li className={s.additionalInfoItem}>
                <Link state={{ from }} to={`/movies/${movieId}/reviews`}>
                  Reviews
                </Link>
              </li>
            </ul>
          </div>
          <Outlet />
        </div>
      )}
    </>
  );
};

export default MovieDetailsPage;
