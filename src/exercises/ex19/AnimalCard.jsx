import PropTypes from 'prop-types'
import './AnimalCard.css'

function AnimalCard({ name, scientificName, size, diet, image, additional, showAdditional }) {
  return (
    <article className="animal-card">
      <img className="animal-card__photo" src={image} alt={name} />
      <h3>{name}</h3>
      <ul className="animal-card__facts">
        <li>Scientific Name: {scientificName}</li>
        <li>Size: {size}</li>
        <li>Diet: {diet.join(', ')}</li>
      </ul>
      <button type="button" className="animal-card__button" onClick={() => showAdditional(additional)}>
        More Info
      </button>
    </article>
  )
}

AnimalCard.propTypes = {
  additional: PropTypes.shape({
    link: PropTypes.string,
    notes: PropTypes.string,
  }),
  diet: PropTypes.arrayOf(PropTypes.string).isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  scientificName: PropTypes.string.isRequired,
  showAdditional: PropTypes.func.isRequired,
  size: PropTypes.number.isRequired,
}

AnimalCard.defaultProps = {
  additional: {
    notes: 'No Additional Information',
  },
}

export default AnimalCard
