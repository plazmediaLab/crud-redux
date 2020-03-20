// TYPES
import {
  SHOW_ALERT,
  HIDE_ALERT
} from '../types/types';

/*=================================================================================
*	 ACTION Show alert
* --------------------------------------------------------------------------------*/
export function showAlertAction(alert_arg){
  return (dispatch) => {
    dispatch( crateAlert(alert_arg) );
  }
}

const crateAlert = alert_arg => ({
  type: SHOW_ALERT,
  payload: alert_arg
})

/*=================================================================================
*	 ACTION Hide alert
* --------------------------------------------------------------------------------*/
export function hideAlertAction(){
  return (dispatch) => {
    dispatch( hideAlert() );
  }
}

const hideAlert = () => ({
  type: HIDE_ALERT,
  payload: null
})