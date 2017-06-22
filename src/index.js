import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { items, inventoryMode } from './reducers'

const reducer = combineReducers({items, inventoryMode})
const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider> ,
  document.getElementById('root')
);
