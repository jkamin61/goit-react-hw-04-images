import { useState } from 'react';
import Modal from '../Modal/Modal';
import PropTypes from 'prop-types';

const ImageGalleryItem = ( {items}) => {

const [isModalOpen, setIsModalOpen] = useState(false);
const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setIsModalOpen(true);
    setSelectedImage(image);
  }

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  }
    return (
      <div>
        <ul className={'image__list'}>
          {items.map((element, index) => {
            return (
              <li key={index} className={'image__item'}>
                <img
                  src={element.webformatURL}
                  alt={element.tags}
                  className={'image__picture'}
                  onClick={() => handleImageClick(element)}
                />
              </li>
            );
          })}
        </ul>
        {isModalOpen && (
          <Modal image={selectedImage} onClose={handleModalClose} />
        )}
      </div>
    );

}

ImageGalleryItem.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }),
  ),
}

export default ImageGalleryItem;
