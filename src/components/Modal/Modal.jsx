import { Component } from 'react';
import Loader from '../Loader/Loader';

export default class Modal extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
    };

    this.handleImageLoad = this.handleImageLoad.bind(this);
  }

  handleImageLoad() {
    this.setState({ isLoading: false });
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    const { image, onClose } = this.props;
    const { isLoading } = this.state;
    return (
      <div className='modal-overlay' onClick={onClose}>
        <div className='modal-container' onClick={(e) => e.stopPropagation()}>
          {isLoading && <Loader />}
          <img
            src={image.largeImageURL}
            alt={image.tags}
            className='modal-image'
            onLoad={this.handleImageLoad}
          />
        </div>
      </div>
    );
  }
}
