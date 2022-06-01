import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { getMovieReview } from 'shared/services/movies';
import s from './Reviews.module.css';

const Reviews = () => {
  const [state, setState] = useState({
    reviews: [],
    loading: false,
    error: false,
  });
  const { movieId } = useParams();

  useEffect(() => {
    const fetchReview = async id => {
      const data = await getMovieReview(id);
      setState(prevState => ({ ...prevState, reviews: data, loading: false }));
    };

    try {
      setState(prevState => ({ ...prevState, loading: true }));
      fetchReview(movieId);
    } catch (error) {
      setState(prevState => ({
        ...prevState,
        loading: false,
        error: error.message,
      }));
    }
  }, [movieId]);

  const { reviews, loading, error } = state;
  const isData = Boolean(reviews.length);

  return (
    <>
      {loading && <p>...Loading</p>}
      {error && <p>{error}</p>}
      {isData && (
        <div className={s.reviewContainer}>
          {reviews.map(({ id, author, content }) => (
            <div key={id}>
              <h2 className={s.reviewTitle}>Author: {author}</h2>
              <p className={s.reviewContent}>{content}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Reviews;
