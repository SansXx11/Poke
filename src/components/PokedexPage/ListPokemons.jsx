import React from 'react'
import PokeCard from './PokeCard'

const ListPokemons = ({pokemons}) => {
  return (
    <div>
        {
            pokemons?.map(pokeinfo => (
                <PokeCard
                    key={pokeinfo.url}
                    pokeinfo = {pokeinfo}
                />
            )) 
        }
    </div>
  )
}

export default ListPokemons