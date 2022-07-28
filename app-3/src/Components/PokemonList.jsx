import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


const PokemonList = () => {

  const [list, setList] = useState([])

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon')
      .then(res => setList(res.data.results))
  })

    const listMapped = list.map((item, index) => {
        return (
            <Link to={`${item.name}`} key={index}><h3>{item.name}</h3></Link>
        )
    })

  return (
    <div>
        {listMapped}
    </div>
  )
}

export default PokemonList;
