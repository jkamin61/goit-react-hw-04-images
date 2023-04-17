import { useEffect, useState } from 'react';
import Loader from '../Loader/Loader';
import PropTypes from 'prop-types';

const Modal = ({onClose, image}) => {
    const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      this.props.onClose();
    }
  };

    return (
      <div className='modal-overlay' onClick={onClose}>
        <div className='modal-container' onClick={(e) => e.stopPropagation()}>
          {isLoading && <Loader />}
          <img
            src={image.largeImageURL}
            alt={image.tags}
            className='modal-image'
            onLoad={handleImageLoad}
          />
        </div>
      </div>
    );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  image: PropTypes.object.isRequired,
}

export default Modal;
