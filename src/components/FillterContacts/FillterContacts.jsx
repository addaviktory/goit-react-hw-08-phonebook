import { useDispatch } from 'react-redux';
import { SearchLabel, SearchInput, SearchTitle } from './FillterContacts.styled';
import { changeFilter } from 'Redux/filterSlice/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <SearchLabel>
      <SearchTitle>Find contacts by name</SearchTitle>
      <SearchInput
        type="text"
        onChange={e => {
          dispatch(changeFilter(e.target.value));
        }}
      ></SearchInput>
    </SearchLabel>
  );
};

export default Filter;