import { configureStore } from '@reduxjs/toolkit'
import trainerReducer from './states/trainer.slice'

export default configureStore({
  reducer:{
    trainer : trainerReducer
    }
})
