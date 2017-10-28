import React from 'react';
import PhotoUploadPanelContainer from './photo_upload_panel_container';

class PhotoUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = { renderUpload: false };
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ renderUpload: true });
  }

  closeModal() {
    this.setState({ renderUpload: false });
  }

  render() {
    return (
      <div className="photo-upload">
        <button className='new-photo-button'
          onClick={this.openModal}>+ New Photo</button>

        { this.state.renderUpload ? (
          <div className='upload-panel'>
            <div className='modal-form'>
              <PhotoUploadPanelContainer closeModal={this.closeModal} />
              <span className="modal-close"
                onClick={this.closeModal}>&times;</span>
            </div>
            <div className="modal-bg"></div>
          </div>) : null }

      </div>
    );
  }
}

export default PhotoUpload;