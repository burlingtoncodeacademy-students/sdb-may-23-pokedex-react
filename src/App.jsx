import { useState } from 'react'
import Input from './components/Input'
import Pokedex from './components/Pokedex'
import './App.css'

function App() {

  const [ name, setName ] = useState("")

  return (
    <>
    <Input setName={setName} />
    {console.log(name)}
    <Pokedex name={name} />
    </>
  )
}

export default App
