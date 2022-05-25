import { Component } from 'react';
import Notiflix from 'notiflix';

import Header from 'components/Header';
import Searchbar from 'components/Header/Searchbar';
import ImageGallery from 'components/ImageGallery';
import Loader from 'shared/components/Loader';

import { getImages } from 'shared/services/images';

import './App.css';
import Button from 'shared/components/Button';

class App extends Component {
  state = {
    q: '',
    items: [],
    isLoading: false,
    page: 1,
    error: null,
    isModalOpen: false,
    modalData: {},
  };
  async componentDidUpdate(prevProps, prevState) {
    const { q, page } = this.state;

    if (prevState.q !== q || page > prevState.page) {
      this.setState({
        isLoading: true,
      });

      try {
        const items = await getImages(q, page);
        this.setState(prevState => {
          return {
            items: [...prevState.items, ...items],
            isLoading: false,
          };
        });
      } catch (error) {
        this.setState({
          isLoading: false,
          error: error.message,
        });
      }
    } else if (!q) {
      Notiflix.Report.info(
        'Упс',
        'Чтобы получить результат - нужно ввести запрос в поле ввода',
        'Понятно',
      );
      return;
    }
  }
  loadMore = () => {
    this.setState(({ page }) => {
      return {
        page: page + 1,
      };
    });
  };
  setQuery = q => {
    this.setState({ q, page: 1, items: [] });
  };
  onFormSubmit = e => {
    e.preventDefault();
  };
  render() {
    const { items, isLoading } = this.state;
    const { setQuery, loadMore } = this;

    return (
      <div className="App">
        <Header>
          <Searchbar onSubmit={setQuery} />
        </Header>
        {Boolean(items.length) && (
          <>
            <ImageGallery items={this.state.items} />
            <Button text="Load More" loadMore={loadMore} />
          </>
        )}
        {isLoading && <Loader isEnabled={isLoading} />}
      </div>
    );
  }
}

export default App;
