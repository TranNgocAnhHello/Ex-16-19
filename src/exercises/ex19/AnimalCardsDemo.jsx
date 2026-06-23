import './AnimalCardsDemo.css'
import AnimalCard from './AnimalCard'
import animalData from './animalData'

function AnimalCardsDemo() {
  const showAdditionalData = (additional) => {
    const message = Object.entries(additional)
      .map(([key, value]) => `${key}: ${value}`)
      .join('\n')

    alert(message)
  }

  return (
    <article className="exercise-card animal-demo">
      <div className="exercise-card__header">
        <p className="exercise-card__tag">Exercise 19</p>
        <h2>PropTypes</h2>
      </div>

      <div className="exercise-card__content">
        <div className="animal-grid">
          {animalData.map((animal) => (
            <AnimalCard
              key={animal.name}
              name={animal.name}
              scientificName={animal.scientificName}
              size={animal.size}
              diet={animal.diet}
              image={animal.image}
              additional={animal.additional}
              showAdditional={showAdditionalData}
            />
          ))}
        </div>
      </div>
    </article>
  )
}

export default AnimalCardsDemo
