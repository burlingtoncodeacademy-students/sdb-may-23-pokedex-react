import { useState } from 'react'
import Input from './components/Input'
import Pokedex from './components/Pokedex'
import './App.css'

function App() {

  const [ poke, setPoke ] = useState("")
  
  return (
    <>
    <Input setPoke={setPoke} />
    <Pokedex poke={poke} />
    </>
  )
}

export default App
