import { useState } from 'react'
import './EventHandlingDemo.css'

function EventHandlingDemo() {
  const [count, setCount] = useState(0)

  const handleButtonClick = () => {
    setCount((current) => current + 1)
  }

  return (
    <article className="exercise-card">
      <div className="exercise-card__header">
        <p className="exercise-card__tag">Exercise 16</p>
        <h2>Demo about Event Handling</h2>
      </div>

      <div className="exercise-card__content">
        <div className="event-demo">
          <p className="event-demo__count">Count: {count}</p>
          <button type="button" className="event-demo__button" onClick={handleButtonClick}>
            Increase Count
          </button>
        </div>
      </div>
    </article>
  )
}

export default EventHandlingDemo
