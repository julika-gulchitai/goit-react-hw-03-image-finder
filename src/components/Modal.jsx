import s from './Styles.module.css';
import React from 'react';

export class Modal extends React.Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }
  handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.closeModal();
    }
  };
  handleKeyDown = e => {
    if (e.key === 'Escape') {
      this.props.closeModal();
    }
  };
  render() {
    const { closeModal, url } = this.props;
    return (
      <div className={s.Overlay} onClick={this.handleBackdropClick}>
        <div className={s.Modal}>
          <img src={url} alt="tags" />
          <button className={s.closeButton} onClick={closeModal}>
            x
          </button>
        </div>
      </div>
    );
  }
}
