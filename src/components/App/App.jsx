import ErrorMessage from '../ErrorMessage/ErrorMessage';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';
import css from './App.module.css';

import { useEffect, useState } from 'react';
import { fetchImages } from '../../images-api';

export default function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [description, setDescription] = useState(null);

  const openModal = (bigImg, alt) => {
    setSelectedImage(bigImg);
    setDescription(alt);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setDescription(null);
    setModalIsOpen(false);
  };

  const handleQuery = async newQuery => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (query === '') {
      return;
    }

    async function getImages() {
      try {
        setIsLoading(true);
        const data = await fetchImages(query, page);
        setImages(prevImages => {
          return [...prevImages, ...data];
        });
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getImages();
  }, [query, page]);

  return (
    <div className={css.mainContainer}>
      <SearchBar onSubmit={handleQuery} />
      {error && <ErrorMessage />}
      {images.length > 0 && (
        <ImageGallery listImages={images} openModal={openModal} />
      )}
      {isLoading && <Loader />}
      {images.length > 0 && !isLoading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      <ImageModal
        isOpen={modalIsOpen}
        modalImg={selectedImage}
        alt={description}
        closeModal={closeModal}
      />
    </div>
  );
}
