import PropTypes from 'prop-types';

const ImageGallery = ({ items }) => {
  return <div className={'image-gallery'}>{items}</div>;
}

ImageGallery.propTypes = {
  items: PropTypes.any.isRequired,
}

export default ImageGallery;
