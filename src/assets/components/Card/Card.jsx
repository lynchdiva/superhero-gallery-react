import PropTypes from 'prop-types';
import './Card.css';

function Card({
  info,
  name,
  universe,
  alterego,
  occupation,
  friends,
  superpowers,
  url
}) {
  const flipCard = event => {
    event.currentTarget.classList.toggle('card__animation-container_flip');
  };

  return (
    <div className="card__animation-container" onClick={flipCard}>
      <div className="card-other-side">
        <p className="card-other-side__info">{info}</p>
      </div>
      <div className="card">
        <h2 className="card__title">{name}</h2>
        <img
          className="card__click-img"
          src="./src/assets/images/click.png"
          alt="inscription click"
        ></img>
        <p className="card__text">
          <span className="card__desc">Вселенная: </span>
          {universe}
        </p>
        <p className="card__text">
          <span className="card__desc">Альтер Эго: </span>
          {alterego}
        </p>
        <p className="card__text">
          <span className="card__desc">Род деятельсности: </span>
          {occupation}
        </p>
        <p className="card__text">
          <span className="card__desc">Друзья: </span>
          {friends}
        </p>
        <p className="card__text">
          <span className="card__desc">Суперсилы: </span>
          {superpowers}
        </p>
        <div className="card__box-img">
          <img className="card__img" src={url} alt={name} />
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  info: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  universe: PropTypes.string.isRequired,
  alterego: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
  friends: PropTypes.string.isRequired,
  superpowers: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default Card;
