import { Component } from 'react';
import Notiflix from 'notiflix';

import Header from 'components/Header';
import Searchbar from 'components/Header/Searchbar';
import ImageGallery from 'components/ImageGallery';
import Loader from 'shared/components/Loader';
import Button from 'shared/components/Button';
import Modal from 'shared/components/Modal';

import { getImages } from 'shared/services/images';

import './App.css';

class App extends Component {
  state = {
    q: '',
    items: [],
    isLoading: false,
    page: 1,
    error: null,
    isModalOpen: false,
    modalData: '',
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
  showModal = modalData => {
    this.setState({
      isModalOpen: true,
      modalData,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  render() {
    const { items, isLoading, isModalOpen, modalData } = this.state;
    const { setQuery, loadMore, showModal, closeModal } = this;

    return (
      <div className="App">
        <Header>
          <Searchbar onSubmit={setQuery} />
        </Header>
        {Boolean(items.length) && (
          <ImageGallery items={this.state.items} onClick={showModal}>
            <Button text="Load More" loadMore={loadMore} />
          </ImageGallery>
        )}
        {isModalOpen && (
          <Modal close={closeModal}>
            <img src={modalData} alt="Nothing to see here" />
          </Modal>
        )}
        {isLoading && <Loader isEnabled={isLoading} />}
      </div>
    );
  }
}

export default App;
