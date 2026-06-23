import { useState } from 'react'
import './RenderAndCommitDemo.css'

function RenderAndCommitDemo() {
  const [count, setCount] = useState(0)

  return (
    <article className="exercise-card">
      <div className="exercise-card__header">
        <p className="exercise-card__tag">Exercise 17</p>
        <h2>Demo about Render and Commit</h2>
      </div>

      <div className="exercise-card__content">
        <div className="render-demo">
          <p className="render-demo__count">Count: {count}</p>
          <button
            type="button"
            className="render-demo__button"
            onClick={() => setCount((current) => current + 1)}
          >
            Increment
          </button>
        </div>
      </div>
    </article>
  )
}

export default RenderAndCommitDemo
