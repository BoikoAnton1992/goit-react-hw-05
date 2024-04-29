import css from './SearchBar.module.css';
import toast, { toastConfig } from 'react-simple-toasts';
import 'react-simple-toasts/dist/theme/dark.css';

toastConfig({ theme: 'dark', clickClosable: true, position: 'center' });

export default function SearchBar({ onSubmit }) {
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;

    if (form.elements.query.value.trim() === '') {
      toast('Please, enter text to serch');
    }
    onSubmit(form.elements.query.value.trim());
    form.reset();
  };

  return (
    <header>
      <form className={css.container} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="query"
        />
        <button className={css.button} type="submit">
          Search
        </button>
      </form>
    </header>
  );
}
