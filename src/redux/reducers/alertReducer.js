// TYPES
import {
  SHOW_ALERT,
  HIDE_ALERT
} from '../types/types';

// Cada REDUCER tiene su propio STATE
const initialState = {
  alert: null
}

// El REDUCER siempre es una función 
export default function(state = initialState, action){
  /* Todo el REDUCER es un SWITCH */
  switch (action.type) {
    case SHOW_ALERT:
      return{
        ...state,
        alert: action.payload
      }
    case HIDE_ALERT:
      return{
        ...state,
        alert: action.payload
      }
      

  
    default:
      return state;
  }
}