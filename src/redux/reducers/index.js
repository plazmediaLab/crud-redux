import { combineReducers } from 'redux';
// Reducers to combine
import productsReducer from './productsReducer';

export default combineReducers({
  products: productsReducer,
})