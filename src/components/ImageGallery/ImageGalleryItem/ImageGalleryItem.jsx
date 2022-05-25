import PropTypes from 'prop-types';

import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ id, url }) => {
  return (
    <li className={styles.ImageGalleryItem} key={id}>
      <img
        className={styles.ImageGalleryItemImage}
        src={url}
        alt="Small example"
      />
    </li>
  );
};

export default ImageGalleryItem;
