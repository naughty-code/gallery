import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import App from './App'
import configureStore from "./configureStore"

import registerServiceWorker from './registerServiceWorker';
//import 'bootstrap/dist/css/bootstrap.css';
import './styles/App.css';

const { store, history } = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
