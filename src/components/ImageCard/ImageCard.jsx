import css from './ImageCard.module.css';

export default function ImageCard({ image: { urls, description }, onClick }) {
  return (
    <div className={css.imageCard}>
      <img
        onClick={() => onClick(urls.regular, description)}
        src={urls.small}
        alt={description}
        width="250"
        height="200"
      />
    </div>
  );
}
