import { useParams, Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

import { getMovieById } from 'shared/services/movies';

import s from './SingleMoviePage.module.css';

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const SingleMoviePage = () => {
  const [state, setState] = useState({
    movie: {},
    loading: false,
    error: null,
  });
  const { id } = useParams();
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    const fetchMovieById = async id => {
      const { data } = await getMovieById(id);
      setState(prevState => ({ ...prevState, movie: data, loading: false }));
    };

    try {
      setState(prevState => ({ ...prevState, loading: true }));
      fetchMovieById(id);
    } catch (error) {
      setState(prevState => ({
        ...prevState,
        loading: false,
        error: error.message,
      }));
    }
  }, [id]);
  const { movie, loading, error } = state;

  return (
    <>
      {Boolean(movie.id) && (
        <div className={s.container}>
          <div className={s.movieCard}>
            <div className={s.movieCardPoster}>
              <img
                src={`${IMG_BASE_URL}/${movie.poster_path}`}
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
                <Link to={`/movies/${id}/cast`}>Cast</Link>
              </li>
              <li className={s.additionalInfoItem}>
                <Link to={`/movies/${id}/reviews`}>Reviews</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleMoviePage;
