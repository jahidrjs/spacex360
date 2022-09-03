import { ActionTypes, typeenum } from '../constants/action-types';
const intialState = {
  rockets: [],
};

export const rocketsReducer = (state = intialState, { type, payload }:{type:typeenum, payload:any}) => {
  switch (type) {
    case ActionTypes.SET_ROCKETS:
      return { ...state, rockets: payload };
    default:
      return state;
  }
};

export const selectedRocketsReducer = (state = {}, { type, payload }:{type:typeenum, payload:any}) => {
  console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_ROCKET:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_ROCKET:
      return {};
    default:
      return state;
  }
};
