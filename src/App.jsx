import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import InputComponent from './components/InputComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>hello</h1>
    <Counter/>
    <InputComponent/>
    </>
  )
}

export default App
