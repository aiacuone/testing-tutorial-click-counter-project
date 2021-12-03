import logo from './logo.svg'
import './App.css'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [error, setError] = useState(false)
  return (
    <div className="App" data-test="component-app">
      <h1 data-test="counter-display">
        The counter is currently&nbsp;<span data-test="count">{count}</span>
      </h1>
      <button
        data-test="decrement-button"
        onClick={() => {
          count > 0 ? setCount(count - 1) : setError(true)
        }}>
        Decrement
      </button>
      <button
        data-test="increment-button"
        onClick={() => {
          if (error && count == 0) setError(false)
          setCount(count + 1)
        }}>
        Increment
      </button>
      {error && <h1 style={{ color: 'red' }}>Error</h1>}
    </div>
  )
}

export default App
