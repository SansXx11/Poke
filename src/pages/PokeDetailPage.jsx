import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/UseFetch'
import { useEffect } from 'react'

const PokeDetailPage = () => {
  
  const { name } = useParams()

  const url = `https://pokeapi.co/api/v2/pokemon/${name}`
  const  [ pokemon, getPokemon ]= useFetch(url)


      useEffect(() => {
      getPokemon()
      },[name])

       
      return (
      <div>
        <header>
        <img src={pokemon?.sprites?.other['official-artwork']?.front_default}  alt="" />
        </header>
        <h2>{pokemon?.name}</h2>
      </div>
    )
} 

export default PokeDetailPage