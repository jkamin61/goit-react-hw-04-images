import axios from 'axios';
import { Component } from 'react';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Button from './Button/Button';
import Loader from './Loader/Loader';

const API_KEY = '33266865-f80f9d7d450116be71a3c9bed';
const QUERY = 'https://pixabay.com/api/';
const PER_PAGE = '12';

export class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      isLoading: false,
      page: 1,
      searchQuery: '',
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleLoadMore = this.handleLoadMore.bind(this);
  }

  async handleSearch(event) {
    event.preventDefault();
    const inputValueOnSearch = event.target.value;
    this.setState({
      isLoading: true,
      articles: [],
      page: 1,
      searchQuery: inputValueOnSearch,
    });

    try {
      const response = await axios.get(
        `${QUERY}?key=${API_KEY}&q=${inputValueOnSearch}&image_type=photo&per_page=${PER_PAGE}`,
      );
      this.setState({ articles: response.data.hits });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  async handleLoadMore() {
    const { articles, page, searchQuery } = this.state;

    this.setState({ isLoading: true });

    try {
      const response = await axios.get(
        `${QUERY}?key=${API_KEY}&q=${searchQuery}&image_type=photo&per_page=${PER_PAGE}&page=${page + 1}`,
      );
      this.setState({
        articles: [...articles, ...response.data.hits],
        page: page + 1,
      });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render() {
    return (
      <div>
        <SearchBar
          handleSearch={this.handleSearch}
        ></SearchBar>
        <ImageGallery items={
          <ImageGalleryItem
            items={this.state.articles}
          ></ImageGalleryItem>
        }>
        </ImageGallery>
        {this.state.articles.length > 0 && <Button onClick={this.handleLoadMore}></Button>}
        {this.state.isLoading && <Loader></Loader>}
      </div>
    );
  };
}


