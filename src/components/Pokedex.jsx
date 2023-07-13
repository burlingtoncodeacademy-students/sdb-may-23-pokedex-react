import React, { useEffect, useState } from 'react'
import Loading from './Loading'
import DisplayPokemon from './DisplayPokemon'

function Pokedex({ name }) {

    // Stores data from the fetch
    const [ data, setData ] = useState([])
    // Flag handling the race condition of fetch
    // const [ loading, setLoading ] = useState(false)

    useEffect(() => {
        // Prevents fetch triggering before it has pokemon value
        if (name !== "") {
            // Flag that stops execution of a console.log or other data append
            // setLoading(true)
            fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
                .then(res => res.json())
                .then(data => {
                    setData(data)
                    // allows execution of other code to occur
                    // setLoading(false)
                    // loading ? null : console.log(data)
                })
                .catch(err => console.log(err))
        }
        // dependency causes useEffect trigger when name value changes
    }, [name])

    /* 
        Return statements only allow expressions
        Expressions only allow singular values to be expressed
        That's why we wrap them in () and Fragments <> </>
    */
    return (
    <>
    { data == ""
        ? <Loading />
        : <DisplayPokemon data={data} />
    }</>
  )
}

export default Pokedex