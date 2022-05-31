import { useParams, Link, Outlet } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import BeatLoader from 'react-spinners/BeatLoader';

import { getMovieById } from 'shared/services/movies';
import IMG_BASE_URL from 'shared/services/api';
import s from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const [state, setState] = useState({
    movie: {},
    loading: false,
    error: null,
  });
  const { movieId } = useParams();
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
      fetchMovieById(movieId);
    } catch (error) {
      setState(prevState => ({
        ...prevState,
        loading: false,
        error: error.message,
      }));
    }
  }, [movieId]);
  const { movie, loading } = state;
  const { title, poster_path, release_date, vote_average, overview, genres } =
    movie;

  return (
    <>
      {loading && <BeatLoader />}
      {Boolean(movie.id) && (
        <div className={s.container}>
          <div className={s.movieCard}>
            <div className={s.movieCardPoster}>
              <img
                src={`${IMG_BASE_URL}/${poster_path}`}
                alt="Movie Poster"
                width="360"
              />
            </div>
            <div className={s.movieCardDescr}>
              <h2 className={s.movieCardTitle}>
                {title} ({release_date.slice(0, 4)})
              </h2>
              <p className={s.movieCardScore}>User Score: {vote_average}</p>
              <h3 className={s.movieCardOverviewTitle}>Overview</h3>
              <p className={s.movieCardOverview}>{overview}</p>
              <h3 className={s.movieCardGenres}>Genres</h3>
              <p>{genres.map(({ name }) => name).join(', ')}</p>
            </div>
          </div>
          <div className={s.additionalInfo}>
            <h4 className={s.additionalInfoTitle}>Additional Information</h4>
            <ul className={s.additionalInfoList}>
              <li className={s.additionalInfoItem}>
                <Link to={`/movies/${movieId}/cast`}>Cast</Link>
              </li>
              <li className={s.additionalInfoItem}>
                <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
      <Outlet />
    </>
  );
};

export default MovieDetailsPage;
