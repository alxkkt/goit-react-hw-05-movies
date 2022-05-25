import PropTypes from 'prop-types';

import styles from './Button.module.css';

const Button = ({ text, loadMore }) => {
  return (
    <button onClick={loadMore} className={styles.Button}>
      {text}
    </button>
  );
};

export default Button;

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
