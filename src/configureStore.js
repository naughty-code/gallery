import createHistory from 'history/createBrowserHistory';
import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux';

import {
  routerReducer,
  routerMiddleware,
  push } from 'react-router-redux'

import reducers from './reducers'

const configureStore = () => {

  // Create a history of your choosing (we're using a browser history in this case)
  const history = createHistory()

  // Build the middleware for intercepting and dispatching navigation actions
  const middleware = routerMiddleware(history)

  // Add the reducer to your store on the `router` key
  // Also apply our middleware for navigating
  const store = createStore(
    combineReducers({
      ...reducers,
      router: routerReducer
    }),
    applyMiddleware(middleware)
  )

  return {store, history};
}

export default configureStore;
