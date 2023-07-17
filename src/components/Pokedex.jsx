import React, { useEffect, useState } from 'react'
import Loading from './Loading'
import DisplayPokemon from './DisplayPokemon'

function Pokedex({ poke }) {
    
    // Stores data from the fetch
    const [ data, setData ] = useState(null)
    const [ error, setError ] = useState(null)

    useEffect(() => {
        async function getData() {
            try {
                setError(null)
                setData(null)
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`)
                if (!res.ok) {
                    if (res.status === 404) {
                        throw Error(res.statusText)
                    } else {
                        throw Error(res.statusText)
                    }
                }
                console.log("THIS LINE DOESNT RUN AFTER ERROR")
                const data = await res.json()
                setData(data)
                console.log(data)
            } catch(err) {
                console.log(err)
                setError(err.message)
            }
        }

        if (poke !== "") getData()
    }, [poke])

    const render = () => {
        if (error) return <h1>{error}</h1>
        if (!data) return <h1>Loading</h1>
        if (data) return <DisplayPokemon data={data} />
    }

    return (
    <>
    {render()}
    </>
  )
}

export default Pokedex