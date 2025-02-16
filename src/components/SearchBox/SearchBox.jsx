import s from './SearchBox.module.css';
const SearchBox = ({ value, onFilter }) => {
  return (
    <div className={s.wrap}>
      <p className={s.descr}>Find contacts by name</p>
      <input
        className={s.input}
        type="text"
        placeholder="Search"
        value={value}
        onChange={e => onFilter(e.target.value)}
      />
    </div>
  );
};
export default SearchBox;
