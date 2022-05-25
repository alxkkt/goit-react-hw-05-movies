import PropTypes from 'prop-types';

import ImageGalleryItem from './ImageGalleryItem';

import styles from './ImageGallery.module.css';

const ImageGallery = ({ items, onClick, children }) => {
  const elements = items.map(item => (
    <ImageGalleryItem
      key={item.id}
      url={item.webformatURL}
      onClick={() => onClick(item.largeImageURL)}
    />
  ));
  return (
    <>
      <ul className={styles.ImageGallery}>{elements}</ul>;{children}
    </>
  );
};

export default ImageGallery;

ImageGallery.defaultProps = {
  items: [],
};

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }),
  ),
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
