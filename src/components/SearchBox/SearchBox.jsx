import { useDispatch } from 'react-redux';
import s from './SearchBox.module.css';
import { changeFilter } from '../../redux/filtersSlice';
import { useState } from 'react';

const SearchBox = () => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    const newValue = e.target.value.trim();
    setValue(newValue);
    setError('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (value === '') {
      setError('Field cannot be empty');
    } else {
      dispatch(changeFilter(value));
    }
  };
  return (
    <div className={s.wrap}>
      <p className={s.descr}>Find contacts by name</p>
      <form onSubmit={handleSubmit}>
        <input
          className={s.input}
          type="text"
          placeholder="Search..."
          value={value}
          onChange={handleChange}
        />
      </form>
      {error && <p className={s.error}>{error}</p>}
    </div>
  );
};
export default SearchBox;
