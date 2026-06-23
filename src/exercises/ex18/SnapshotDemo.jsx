import { useState } from 'react'
import './SnapshotDemo.css'

function SnapshotDemo() {
  const [count, setCount] = useState(0)
  const [snapshot, setSnapshot] = useState(null)

  const handleIncrement = () => {
    setCount((current) => current + 1)
  }

  const handleSnapshot = () => {
    setSnapshot(count)
  }

  const handleRestore = () => {
    if (snapshot !== null) {
      setCount(snapshot)
    }
  }

  return (
    <article className="exercise-card">
      <div className="exercise-card__header">
        <p className="exercise-card__tag">Exercise 18</p>
        <h2>Demo about State as a Snapshot</h2>
      </div>

      <div className="exercise-card__content">
        <div className="snapshot-demo">
          <h3 className="snapshot-demo__title">State as a Snapshot Demo</h3>
          <p className="snapshot-demo__count">Count: {count}</p>
          <div className="snapshot-demo__buttons">
            <button type="button" onClick={handleIncrement}>
              Increment
            </button>
            <button type="button" onClick={handleSnapshot}>
              Take Snapshot
            </button>
            <button type="button" onClick={handleRestore}>
              Restore Snapshot
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}

export default SnapshotDemo
