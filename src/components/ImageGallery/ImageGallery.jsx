import { Component } from 'react';

export default class ImageGallery extends Component {
  render() {
    const { items } = this.props;
    return (
      <div className={'image-gallery'}>{items}</div>
    );
  }
}
