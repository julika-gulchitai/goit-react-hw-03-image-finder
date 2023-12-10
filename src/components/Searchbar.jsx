import React from 'react';
import s from './Styles.module.css';

// https://pixabay.com/api/?key=40712240-584c6352de5cb384d1e409b2f&q=yellow+flowers&image_type=photo

export class Searchbar extends React.Component {
  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm}>
          <button type="submit" className={s.SearchFormButton}>
            <span className={s.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={s.SearchFormInput}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
