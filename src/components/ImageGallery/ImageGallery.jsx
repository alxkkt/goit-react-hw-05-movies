import PropTypes from 'prop-types';
import ImageGalleryItem from './ImageGalleryItem';

import styles from './ImageGallery.module.css';

const ImageGallery = ({ items }) => {
  const elements = items.map(item => (
    <>
      <ImageGalleryItem id={item.id} url={item.webformatURL} />
    </>
  ));
  return <ul className={styles.ImageGallery}>{elements}</ul>;
};

export default ImageGallery;
