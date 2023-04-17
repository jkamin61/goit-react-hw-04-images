import { Component } from 'react';
import Modal from '../Modal/Modal';

export default class ImageGalleryItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false,
      selectedImage: null,
    };

    this.handleImageClick = this.handleImageClick.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
  }

  handleImageClick(image) {
    this.setState({
      isModalOpen: true,
      selectedImage: image,
    });
  }

  handleModalClose() {
    this.setState({
      isModalOpen: false,
      selectedImage: null,
    });
  }

  render() {
    const { items } = this.props;
    const { isModalOpen, selectedImage } = this.state;

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
                  onClick={() => this.handleImageClick(element)}
                />
              </li>
            );
          })}
        </ul>
        {isModalOpen && (
          <Modal image={selectedImage} onClose={this.handleModalClose} />
        )}
      </div>
    );
  }
}
