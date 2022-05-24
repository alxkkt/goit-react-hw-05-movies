import { Component } from 'react';
import axios from 'axios';
import Notiflix from 'notiflix';

import { Grid } from 'react-loader-spinner';
import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import Modal from 'components/Modal';
import Button from 'components/Button';
import Loader from 'components/Loader';

import './App.css';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const API_KEY = '27140133-cf6dd0795ec4c8135d19f929c';
const BASE_URL = 'https://pixabay.com/api/';
const SEARCH_PARAM = 'image_type=photo&orientation=horizontal&per_page=12';

class App extends Component {
  state = {
    query: '',
    items: [],
    loading: false,
    page: 1,
    error: null,
  };
  getQuery = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  onSearchSubmit = e => {
    e.preventDefault();
    const { query } = this.state;

    this.setState({ loading: true });

    query
      ? this.fetchData()
      : Notiflix.Notify.failure('Please, enter что-нибудь');
  };
  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;

    if (prevState.items !== this.state.items) {
      console.log('DA!');
    }
  }
  async fetchData() {
    const { query, page } = this.state;

    try {
      const { data } = await axios.get(
        `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&${SEARCH_PARAM}`,
      );

      this.setState(prevState => {
        return {
          items: [...prevState.items, ...data.hits],
          page: prevState.page + 1,
          loading: false,
        };
      });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    const { items, loading } = this.state;

    return (
      <div className="App">
        <Searchbar handleInput={this.getQuery} onSearch={this.onSearchSubmit} />
        {items.length && !loading && <ImageGallery items={this.state.items} />}
        {loading && <Grid color="#00BFFF" height={80} width={80} />}
      </div>
    );
  }
}

export default App;
