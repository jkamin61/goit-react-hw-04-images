import loop from './search-loop.svg';
import PropTypes from 'prop-types';

const SearchBar = ( { handleSearch }) => {
    return (
      <header className={'search-bar'}>
          <form className={'search-bar__form'} onSubmit={(e) => {
            e.preventDefault();
          }} id={'query-form'}>
            <input
              type='text'
              className={'search-bar__input'}
              onChange={handleSearch}
              autoComplete='off'
              autoFocus
            />
            <img src={loop} alt='Search' className={'search-bar__icon'} height={'18px'} width={'18px'} />
          </form>
      </header>
    );
}

SearchBar.propTypes = {
  handleSearch: PropTypes.func.isRequired,
}
export default SearchBar;
