import { Component } from 'react';
import { Button } from './Button';
import { ImageGallery } from './ImageGallery';
import { Searchbar } from './Searchbar';
import s from './Styles.module.css';
import { searchImages, searchImagesbyQuery } from '../services/api';
import { Modal } from './Modal';
import { Loader } from './Loader';

export class App extends Component {
  state = {
    images: [],
    page: 1,
    search: '',
    modal: false,
    loading: false,
    error: null,
  };

  async componentDidMount() {
    try {
      this.setState({ loading: true, error: null });
      const { hits: searchimages } = await searchImages();

      if (searchimages === undefined) this.setState({ images: [] });
      else this.setState({ images: searchimages });
    } catch (error) {
      console.log(error.message);
    } finally {
      this.setState({ loading: false });
    }
  }
  onSearchQuery = e => {
    this.setState({ search: e.target[0].value, page: 1 });
  };

  async componentDidUpdate(_, prevState) {
    if (
      prevState.search !== this.state.search ||
      prevState.page !== this.state.page
    ) {
      if (prevState.search !== this.state.search) this.setState({ images: [] });
      try {
        this.setState({ loading: true });
        const { hits: resultImages } = await searchImagesbyQuery(
          this.state.search,
          this.state.page
        );
        if (resultImages !== undefined)
          this.setState(prevState => ({
            images: [...prevState.images, ...resultImages],
          }));
      } catch (error) {
        console.log(error.message);
      } finally {
        this.setState({ loading: false });
      }
    }
  }
  onLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images, loading, focusURL, modal } = this.state;
    let aLotOfImage = false;
    if (images && images.length >= 12) {
      aLotOfImage = true;
    }
    return (
      <div className={s.App}>
        <Searchbar onSearchQuery={this.onSearchQuery} />
        {loading && <Loader />}
        <ImageGallery
          images={images}
          openModal={url =>
            this.setState({
              focusURL: url,
              modal: true,
            })
          }
        />
        {!images.length && !loading && (
          <h2 className={s.Nothify}>
            Sorry! Nothing found! Try again, please!
          </h2>
        )}
        {modal && (
          <Modal
            url={focusURL}
            closeModal={() => this.setState({ modal: false })}
          />
        )}
        {aLotOfImage && <Button addMoreImages={this.onLoadMore} />}
      </div>
    );
  }
}
