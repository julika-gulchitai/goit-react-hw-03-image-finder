import React from 'react';
import { BsSearchHeart } from 'react-icons/bs';
import s from './Styles.module.css';

export class Searchbar extends React.Component {
  state = {
    query: '',
  };
  onSubmit = e => {
    e.preventDefault();

    this.props.onSearchQuery(e);
  };
  onChangeQuery = e => {
    this.setState({ query: e.target.value });
  };
  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.onSubmit}>
          <input
            className={s.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.onChangeQuery}
          />
          <span className={s.SearchFormButtonLabel}></span>
          <button type="submit" className={s.SearchFormButton}>
            <BsSearchHeart color="#617587" size="30" />
          </button>
        </form>
      </header>
    );
  }
}
