import { useState, useEffect } from 'react';
import Notiflix from 'notiflix';

import Header from 'components/Header';
import Searchbar from 'components/Header/Searchbar';
import ImageGallery from 'components/ImageGallery';
import Loader from 'shared/components/Loader';
import Button from 'shared/components/Button';
import Modal from 'shared/components/Modal';

import { getImages } from 'shared/services/images';

import './App.css';

const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [state, setState] = useState({
    items: [],
    loading: false,
    error: null,
  });
  const [modal, setModal] = useState({
    isModalOpen: false,
    modalData: '',
  });

  // const firstRender = useRef(true);

  useEffect(() => {
    if (!query) {
      return;
    }

    const fetchData = async () => {
      const items = await getImages(query, page);

      setState(prevState => ({
        items: [...prevState.items, ...items],
        loading: false,
      }));
    };
    try {
      setState(prevState => ({ ...prevState, loading: true }));
      fetchData();
    } catch (error) {
      setState(prevState => ({
        ...prevState,
        loading: false,
        error: error.message,
      }));
    }
  }, [query, page]);
  const loadMore = () => {
    setPage(page + 1);
  };
  const changeQuery = q => {
    if (!q) {
      Notiflix.Report.info(
        'Упс',
        'Чтобы получить результат - нужно ввести запрос в поле ввода',
        'Понятно',
      );
      return;
    }
    setQuery(q);
    setPage(1);
  };
  const showModal = modalData => {
    setModal({
      isModalOpen: true,
      modalData,
    });
  };
  const closeModal = () => {
    setModal(prevState => ({
      ...prevState,
      isModalOpen: false,
    }));
  };
  const { loading, items } = state;
  return (
    <div className="App">
      <Header>
        <Searchbar onSubmit={changeQuery} />
      </Header>
      {Boolean(items.length) && (
        <ImageGallery items={items} onClick={showModal}>
          <Button text="Load More" loadMore={loadMore} />
        </ImageGallery>
      )}
      {loading && <Loader isEnabled={loading} />}
      {modal.isModalOpen && (
        <Modal close={closeModal}>
          <img src={modal.modalData} alt="Nothing to see here" />
        </Modal>
      )}
    </div>
  );
};

export default App;
