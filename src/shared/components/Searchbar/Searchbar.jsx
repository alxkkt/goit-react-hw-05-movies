import { useState, memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './Searchbar.module.css';

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query);

    setQuery('');
  };
  const handleChange = e => {
    const { value } = e.target;

    setQuery(value);
  };
  return (
    <form className={styles.SearchForm} onSubmit={handleSubmit}>
      <button type="submit" className={styles.SearchFormButton}>
        <span className={styles.SearchFormButtonLabel}>Search</span>
      </button>

      <input
        className={styles.SearchFormInput}
        type="text"
        name={query}
        autoComplete="off"
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
