import PropTypes from 'prop-types';
import './Card.css';
import CardDetails from '../CardDetails/CardDetails';

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
        <CardDetails detail="Вселенная" value={universe} />
        <CardDetails detail="Альтер Эго" value={alterego} />
        <CardDetails detail="Род деятельсности" value={occupation} />
        <CardDetails detail="Друзья" value={friends} />
        <CardDetails detail="Суперсилы" value={superpowers} />
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
