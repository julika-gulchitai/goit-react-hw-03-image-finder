import s from './Styles.module.css';

export const Button = ({ addMoreImages }) => {
  return (
    <button className={s.Button} type="button" onClick={addMoreImages}>
      Load more
    </button>
  );
};
