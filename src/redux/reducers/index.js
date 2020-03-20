import { combineReducers } from 'redux';
// Reducers to combine
import productsReducer from './productsReducer';
import alertReducer from './alertReducer';

export default combineReducers({
  products: productsReducer,
  alert: alertReducer,
})