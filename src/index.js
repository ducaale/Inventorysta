import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { items, inventoryPage, addItemDialog, editItemDialog, historys, salesItems, newInvoice } from './reducers'

const reducer = combineReducers({
  items, inventoryPage, addItemDialog, editItemDialog, historys, salesItems, newInvoice
})

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
)

store.subscribe(() => {
  localStorage.setItem('items', JSON.stringify(store.getState().items))
  localStorage.setItem('historys', JSON.stringify(store.getState().historys))
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider> ,
  document.getElementById('root')
);
