import { useState } from 'react'
import './SnapshotDemo.css'

function SnapshotDemo() {
  const [count, setCount] = useState(0)
  const [snapshot, setSnapshot] = useState(null)

  const handleIncrement = () => {
    setCount(count + 1)
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
    <div className="snapshot-demo">
      <p className="snapshot-demo__tag">Exercise 18</p>
      <h1>State as a Snapshot Demo</h1>
      <p>Count: {count}</p>
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
  )
}

export default SnapshotDemo
