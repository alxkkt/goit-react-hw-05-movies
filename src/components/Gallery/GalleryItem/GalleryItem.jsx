import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import s from './GalleryItem.module.css';
import getPosterLink from 'shared/services/posterLink';

const GalleryItem = ({ id, title, poster_path, vote_average }) => {
  const location = useLocation();

  return (
    <li className={s.listItem}>
      <Link state={{ from: location }} to={`/movies/${id}`}>
        <div className={s.itemContainer}>
          <img src={getPosterLink(poster_path)} alt={title} />
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

GalleryItem.defaultProps = {
  poster_path: PropTypes.string,
};

GalleryItem.propTypes = {
  vote_average: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
