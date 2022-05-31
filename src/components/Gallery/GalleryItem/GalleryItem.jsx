import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import s from './GalleryItem.module.css';
import IMG_BASE_URL from 'shared/services/api';

const GalleryItem = ({ id, title, poster_path, vote_average }) => {
  return (
    <li className={s.listItem}>
      <Link to={`/movies/${id}`}>
        <div className={s.itemContainer}>
          <img src={`${IMG_BASE_URL}/${poster_path}`} alt={title} />
          <div className={s.itemInfo}>
            <h2 className={s.itemTitle}>{title}</h2>
            <p className={s.itemScore}>
              {vote_average === 0 ? 'N/A' : vote_average}
            </p>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default GalleryItem;

GalleryItem.propTypes = {
  poster_path: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
