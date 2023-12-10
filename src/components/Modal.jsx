import s from './Styles.module.css';

export class Modal extends React.Component {
  render() {
    return (
      <div className={s.Overlay}>
        <div className={s.Modal}>
          <img src="" alt="" />
        </div>
      </div>
    );
  }
}
