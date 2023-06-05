import { SearchForm } from 'components/SearchFilter/SearchFilter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterReducer } from 'redux/filterSlice';

const SearchFilter = () => {
  const filter = useSelector(state => state.filter.filter);
  const dispatch = useDispatch();
  const handleFilter = event => {
    dispatch(filterReducer(event.currentTarget.value));
  };
  return (
    <SearchForm htmlFor="filter-field">
      Find contacts by name
      <input
        className="search-input"
        id="filter-field"
        type="text"
        value={filter}
        onChange={handleFilter}
      />
    </SearchForm>
  );
};

export default SearchFilter;
