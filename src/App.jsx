import { useState } from 'react'
import Input from './components/Input'
import Pokedex from './components/Pokedex'
import './App.css'

function App() {

  const [ name, setName ] = useState("")

  return (
    <>
    <Input setName={setName} />
    <Pokedex name={name} />
    </>
  )
}

export default App
