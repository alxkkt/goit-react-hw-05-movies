import PropTypes from 'prop-types';

import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ url, onClick }) => {
  return (
    <li className={styles.ImageGalleryItem} onClick={onClick}>
      <img
        className={styles.ImageGalleryItemImage}
        src={url}
        alt="Small example"
      />
    </li>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  url: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
