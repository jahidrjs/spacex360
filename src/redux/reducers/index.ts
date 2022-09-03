import { combineReducers } from 'redux';
import { rocketsReducer, selectedRocketsReducer } from './rocketsReducer';
const reducers = combineReducers({
  allRockets: rocketsReducer,
  rocket: selectedRocketsReducer,
});
// console.log('my reducers'+ reducers);
export default reducers;
