import { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    q: '',
  };
  handleSubmit = e => {
    e.preventDefault();
    const { q } = this.state;

    this.props.onSubmit(q);
  };
  handleChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };
  render() {
    const { handleChange, handleSubmit } = this;

    return (
      <form className={styles.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={styles.SearchFormButton}>
          <span className={styles.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={styles.SearchFormInput}
          type="text"
          name="q"
          autoComplete="off"
          autoFocus
          onChange={handleChange}
          placeholder="Search images and photos"
        />
      </form>
    );
  }
}

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
