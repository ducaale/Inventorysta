import React from 'react'

import injectTapEventPlugin from 'react-tap-event-plugin'; injectTapEventPlugin();

import AppHeader  from './components/AppHeader'
import OrderList from './components/OrderList'
import InventoryList from './components/InventoryList'

import './App.css';

const App = () => {
  return (
    <div>
      <div className="App">
        <AppHeader />
        <div className="AppContent">
          <InventoryList className="InventoryList" />
          <OrderList className="OrderList" />
        </div>
      </div>
    </div>
  );
}

export default App
