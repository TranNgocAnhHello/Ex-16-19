import PropTypes from 'prop-types'
import './AnimalCard.css'

function AnimalCard({ name, scientificName, size, diet, image, onMoreInfo }) {
  return (
    <article className="animal-card">
      <div className="animal-card__image">
        <img className="animal-card__photo" src={image} alt={name} />
      </div>

      <div className="animal-card__body">
        <h3 className="animal-card__name">{name}</h3>
        <ul className="animal-card__facts">
          <li>Scientific Name: {scientificName}</li>
          <li>{size} kg</li>
          <li>{diet.join(', ')}</li>
        </ul>
        <button type="button" className="animal-card__button" onClick={onMoreInfo}>
          More Info
        </button>
      </div>
    </article>
  )
}

AnimalCard.propTypes = {
  name: PropTypes.string.isRequired,
  scientificName: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  diet: PropTypes.arrayOf(PropTypes.string).isRequired,
  image: PropTypes.string.isRequired,
  onMoreInfo: PropTypes.func.isRequired,
}

export default AnimalCard
