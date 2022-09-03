import { ActionTypes } from '../constants/action-types';

export const setRockets = (rockets:any) => {
  return {
    type: ActionTypes.SET_ROCKETS,
    payload: rockets.data,
  };
};

export const selectedRocket = (rocket:any) => {
  return {
    type: ActionTypes.SELECTED_ROCKET,
    payload: rocket.data,
  };
};
export const removeSelectedRocket = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_ROCKET,
  };
};
