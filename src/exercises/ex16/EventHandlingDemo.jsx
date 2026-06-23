import { useState } from 'react'
import './EventHandlingDemo.css'

function EventHandlingDemo() {
  const [count, setCount] = useState(0)

  const handleButtonClick = () => {
    setCount(count + 1)
  }

  return (
    <div className="event-demo">
      <p className="event-demo__tag">Exercise 16</p>
      <h1>Demo about Event Handling</h1>
      <p>Count: {count}</p>
      <button type="button" onClick={handleButtonClick}>
        Increase Count
      </button>
    </div>
  )
}

export default EventHandlingDemo
