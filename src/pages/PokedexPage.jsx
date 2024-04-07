import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import useFetch from '../hooks/UseFetch';
import ListPokemons from '../components/PokedexPage/ListPokemons'; // Add missing import statement
import { useRef } from 'react';
import { useState } from 'react';
import SelectType from '../components/PokedexPage/SelectType';
import './Styles/PokedexPage.css'
const PokedexPage = () => {
 
  const [pokeSearch, setPokeSearch] = useState('') 
  const [typeSelected, setTypeSelected] = useState('allPokemons')
  const inputSearch = useRef()
  const trainer = useSelector((state) => state.trainer);
  const url = "https://pokeapi.co/api/v2/pokemon?limit=30&offset=0";
  const [pokemons, getPokemons, getPokeByType] = useFetch(url);
  
  useEffect(() => {
    if(typeSelected === 'allPokemons'){
      getPokemons()
    }else{
      getPokeByType(typeSelected)
    }
  }, [typeSelected, getPokeByType , getPokemons])

  const handleSubmit = (e) => {
    e.preventDefault();
    setPokeSearch(inputSearch.current.value.trim().toLowerCase());
}
  const pokemonFiltered = pokemons?.results.filter(poke => {
    return poke.name.includes(pokeSearch);
})

return (
    <div>
      <p className='hi'>
        Welcome {trainer}, here you can find your favorite pokemon!
      </p>

      <form onSubmit={handleSubmit}>

        <input className='search__button' ref={inputSearch} value={pokeSearch} onChange={(e) => setPokeSearch(e.target.value.trim().toLowerCase())} type='text' placeholder='Search your pokemon'/>
        <button className='search'>Search</button>
      </form>
       <SelectType 
        setTypeSelected ={setTypeSelected}
       /> 
      <ListPokemons 
      pokemons={pokemonFiltered}
       />
    </div>
  );
};

export default PokedexPage;
