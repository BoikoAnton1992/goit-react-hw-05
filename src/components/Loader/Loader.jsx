import { Audio } from 'react-loader-spinner';
import css from './Loader.module.css';

export default function Loader() {
  return (
    <div className={css.loaderContainer}>
      <Audio
        height="200"
        width="200"
        radius="9"
        color="rgb(46, 43, 226)"
        ariaLabel="three-dots-loading"
        wrapperStyle
        wrapperClass
      />
    </div>
  );
}
