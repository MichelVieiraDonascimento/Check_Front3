import { useState } from 'react'
import Cadastro from './Components/cadrastro'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    
      <Cadastro/>
    </div>
  )
}

export default App
