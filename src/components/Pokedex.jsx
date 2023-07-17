import React, { useEffect, useState } from 'react'
import Loading from './Loading'
import DisplayPokemon from './DisplayPokemon'

// poke is a state variable in App.jsx that is updated by Input.jsx
function Pokedex({ poke }) {
    
    const [ data, setData ] = useState(null)
    const [ error, setError ] = useState(null)
    
    // https://pokeapi.co/api/v2/pokemon/ditto
    useEffect(() => {
        async function getData() {
            try {
                // Resetting the values for each run
                setError(null)
                setData(null)
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`)
                // Check if response object succeeded
                if (!res.ok) {
                    if (res.status === 404) {
                        // Throw an exception with the value of default status for a 404
                        throw Error(res.statusText)
                    } else {
                        // Throw an exception with the value of default status for any other status code
                        throw Error(res.statusText)
                    }
                }
                // !---- WILL NOT RUN IF ERROR OCCURS ----
                const d = await res.json()
                setData(d)
                // ----------------------------------------
            } catch(err) {
                console.log(err)
                // Catches error from exception we threw and updates the state variable
                setError(err.message)
            }
        }
        // Handles first (initial) useEffect render
        if (poke !== "") getData()
    }, [poke])

    const render = () => {
        // If this is true no other condition below will be true
        if (error) return <h1>{error}</h1>
        // If this is true there's no data
        if (!data) return <h1>Loading...</h1>
        // Data is last so that the first two conditions can always run
        if (data) return <DisplayPokemon data={data} />
    }


    return (
    <>
    {render()}
    </>
  )
}

export default Pokedex