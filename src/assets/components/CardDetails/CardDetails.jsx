import PropTypes from 'prop-types';
import './CardDetails.css';

function CardDetails({ detail, value }) {
  return (
    <p className="card__text">
      <span className="card__desc">{detail}: </span>
      {value}
    </p>
  );
}

CardDetails.propTypes = {
  detail: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

export default CardDetails;
