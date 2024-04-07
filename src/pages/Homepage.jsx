import React from 'react'
import FormTrainer from '../components/homepage/FormTrainer'
import './Styles/PokedexPage.css'

const Homepage = () => {
  return (
    <div>
        <h1 className='header__pokedex'>Pokedex</h1>
        <h2 className='hello'>Hi trainer</h2>
        <p className='paragraph'>To see pokemon's information, tell me your trainer name </p>
        <FormTrainer /> 
      
    </div>
  )
}

export default Homepage