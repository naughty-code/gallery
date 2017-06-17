import { combineReducers } from 'redux'
import gallery from './gallery'
import { routerReducer } from 'react-router-redux'

const reducers = combineReducers({
  gallery,
  routerReducer
});

export default reducers;
