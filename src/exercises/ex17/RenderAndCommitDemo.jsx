import { useState } from 'react'
import './RenderAndCommitDemo.css'

function RenderAndCommitDemo() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <div className="render-demo">
      <p className="render-demo__tag">Exercise 17</p>
      <h1>Render and Commit Demo</h1>
      <p>Count: {count}</p>
      <button type="button" onClick={handleClick}>
        Increment
      </button>
    </div>
  )
}

export default RenderAndCommitDemo
