import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import './components/SearchBar/searchBar.css';
import './components/ImageGallery/imageGallery.css';
import './components/ImageGalleryItem/imageGalleryItem.css';
import './components/Button/button.css';
import './components/Loader/loader.css';
import './components/Modal/modal.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
