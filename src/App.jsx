import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Darazz from './assets/component/Darazz'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Darazz/>
    </>
  )
}

export default App
