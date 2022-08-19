import React,{ useState, memo } from 'react';

import styles from './Searchbar.module.css';

type onSubmit = {
  onSubmit: (param: {query: string}) => void;
}

const Searchbar = ({ onSubmit }: onSubmit) => {
  const [state, setState] = useState({
    query: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSubmit({ ...state });

    setState({ query: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        value={state.query}
        autoFocus
        onChange={handleChange}
        placeholder="Search your favourite movie"
      />
    </form>
  );
};

export default memo(Searchbar);
