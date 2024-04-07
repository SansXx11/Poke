import  { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { setTrainer } from '../../store/states/trainer.slice'    
import { useNavigate } from 'react-router-dom'
import "./Styles/FormTrainer.css"
const FormTrainer = () => {


    const TrainerInput = useRef()

    const dispatch = useDispatch()

    const navigate = useNavigate ()

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(setTrainer(TrainerInput.current.value.trim()))
        navigate ('/pokedex')
    }

  return (
    <form className='Name__trainer' onSubmit={handleSubmit}>
        <input className="Name" ref={TrainerInput} type="text"  placeholder='Put Your name!'/>
        <button className="Begin" >Let Start</button>
    </form>
  )
}   

export default FormTrainer