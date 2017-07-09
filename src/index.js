import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { items, inventoryPage, addItemDialog, editItemDialog } from './reducers'

const reducer = combineReducers({items, inventoryPage, addItemDialog, editItemDialog})
const store = createStore(reducer)

store.subscribe(() => {
  localStorage.setItem('items', JSON.stringify(store.getState().items))
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider> ,
  document.getElementById('root')
);
