import s from './Styles.module.css';

export const ImageGalleryItem = ({
  id,
  webformatURL,
  largeImageURL,
  tags,
  openModal,
}) => {
  return (
    <li className={s.ImageGalleryItem} key={id}>
      <img
        className={s.ImageGalleryItemImage}
        src={webformatURL}
        alt={tags}
        onClick={() => openModal(largeImageURL)}
      />
    </li>
  );
};
