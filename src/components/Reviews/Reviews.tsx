import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import { getMovieReview } from '../../shared/services/movies';
import s from './Reviews.module.css';

type Review = {
  id: string;
  author: string;
  content: string;
}

interface IState {
  reviews: Review[];
  loading: boolean;
  error: unknown;
}

const Reviews = () => {
  const [state, setState] = useState<IState>({
    reviews: [],
    loading: false,
    error: false,
  });
  const { movieId } = useParams();

  useEffect(() => {
    const fetchReview = async (id: string) => {
      const data = await getMovieReview(id);
      setState(prevState => ({ ...prevState, reviews: data, loading: false }));
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

  const { reviews, loading, error } = state;
  const isData = Boolean(reviews.length);

  return (
    <>
      {loading && <p>...Loading</p>}
      {isData && !error &&(
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
