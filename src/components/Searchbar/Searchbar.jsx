import PropTypes from 'prop-types';

import styles from './Searchbar.module.css';

const Searchbar = ({ handleInput, onSearch }) => {
  return (
    <header className={styles.Searchbar}>
      <form className={styles.SearchForm} onSubmit={onSearch}>
        <button type="submit" className={styles.SearchFormButton}>
          <span className={styles.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={styles.SearchFormInput}
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          onChange={handleInput}
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default Searchbar;
