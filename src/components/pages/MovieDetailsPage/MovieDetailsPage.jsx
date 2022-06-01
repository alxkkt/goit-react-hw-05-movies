import { useParams, Link, Outlet, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import BeatLoader from 'react-spinners/BeatLoader';

import { getMovieById } from 'shared/services/movies';
import getImgLink from 'shared/services/posterLink';
import s from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const [state, setState] = useState({
    movie: null,
    loading: false,
    error: null,
  });
  const { movieId } = useParams();

  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  useEffect(() => {
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
  const { movie, loading, error } = state;

  return (
    <>
      {loading && <BeatLoader />}
      {error && <p>{error}</p>}
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
                <Link to={`/movies/${movieId}/cast`}>Cast</Link>
              </li>
              <li className={s.additionalInfoItem}>
                <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
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
