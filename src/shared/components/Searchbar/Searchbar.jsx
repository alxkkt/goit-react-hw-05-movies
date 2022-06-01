import { useState, memo } from 'react';
import PropTypes from 'prop-types';

import styles from './Searchbar.module.css';

const Searchbar = ({ onSubmit }) => {
  const [state, setState] = useState({
    query: '',
  });

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state });
    setState({ query: '' });
  };
  const handleChange = e => {
    const { name, value } = e.target;

    setState(prevState => ({ ...prevState, [name]: value }));
  };
  return (
    <form className={styles.SearchForm} onSubmit={handleSubmit}>
      <button type="submit" className={styles.SearchFormButton}>
        <span className={styles.SearchFormButtonLabel}>Search</span>
      </button>

      <input
        className={styles.SearchFormInput}
        type="text"
        name="query"
        autoComplete="off"
        value={state.q}
        autoFocus
        onChange={handleChange}
        placeholder="Search your favourite movie"
      />
    </form>
  );
};

export default memo(Searchbar);

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
