import axios from 'axios';
import { useState } from 'react';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Button from './Button/Button';
import Loader from './Loader/Loader';

const API_KEY = '33266865-f80f9d7d450116be71a3c9bed';
const QUERY = 'https://pixabay.com/api/';
const PER_PAGE = '12';

export const App = () => {
const [articles, setArticles] = useState([]);
const [isLoading, setIsLoading] = useState(false);
const [page, setPage] = useState(1);
const [searchQuery, setSearchQuery] = useState('');

  async function handleSearch(event) {
    event.preventDefault();
    const inputValueOnSearch = event.target.value;
    setArticles([]);
    setIsLoading(true);
    setPage(1);
    setSearchQuery(inputValueOnSearch);

    try {
      const response = await axios.get(
        `${QUERY}?key=${API_KEY}&q=${inputValueOnSearch}&image_type=photo&per_page=${PER_PAGE}`,
      );
      setArticles(response.data.hits);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleLoadMore() {
    setIsLoading(true);

    try {
      const response = await axios.get(
        `${QUERY}?key=${API_KEY}&q=${searchQuery}&image_type=photo&per_page=${PER_PAGE}&page=${page + 1}`,
      );
      setArticles([...articles, ...response.data.hits]);
      setPage(page + 1);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }
    return (
      <div>
        <SearchBar
          handleSearch={handleSearch}
        ></SearchBar>
        <ImageGallery items={
          <ImageGalleryItem
            items={articles}
          ></ImageGalleryItem>
        }>
        </ImageGallery>
        {articles.length > 0 && <Button onClick={handleLoadMore}></Button>}
        {isLoading && <Loader></Loader>}
      </div>
    );
}


