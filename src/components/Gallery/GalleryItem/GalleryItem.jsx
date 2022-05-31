import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import s from './GalleryItem.module.css';

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const GalleryItem = ({ id, title, poster_path, vote_average }) => {
  return (
    <li className={s.listItem}>
      {/* <Link to={`/movies/${id}`}>{title}</Link> */}
      <div className={s.itemContainer}>
        <img src={`${IMG_BASE_URL}/${poster_path}`} alt={title} width="250" />
        <div className={s.itemInfo}>
          <h2 className={s.itemTitle}>{title}</h2>
          <p className={s.itemScore}>
            {vote_average === 0 ? 'N/A' : vote_average}
          </p>
        </div>
      </div>
    </li>
  );
};

export default GalleryItem;

GalleryItem.propTypes = {
  title: PropTypes.string.isRequired,
};
