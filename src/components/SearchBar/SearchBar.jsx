import css from '../SearchBar/SearchBar.module.css';

export default function SearchBar({ value, onSubmit }) {
  return (
    <header>
      <form
        className={css.container}
        value={value}
        onChange={e => onSubmit(e.target.value.trim())}
      >
        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="query"
        />
        <button className={css.btn} type="submit">
          Search
        </button>
      </form>
    </header>
  );
}
