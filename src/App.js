import React from 'react'

import injectTapEventPlugin from 'react-tap-event-plugin'; injectTapEventPlugin();

import AppHeader  from './components/AppHeader'
import OrderList from './components/OrderList'
import InventoryList from './components/InventoryList'
import HistoryList from './components/HistoryList'
import Page from './components/Page'

import './App.css';

const App = () => {
  return (
    <div>
      <div className="App">
        <AppHeader />

          <Page path="SELL_PAGE">
            <div className="AppContent">
              <InventoryList className="InventoryList" />
              <OrderList className="OrderList" />
            </div>
          </Page>

          <Page path="BUY_PAGE">
            <div className="AppContent">
              <InventoryList className="InventoryList" />
              <OrderList className="OrderList" />
            </div>
          </Page>

          <Page path="HISTORY_PAGE">
            <div className="AppContent">
              <HistoryList />
            </div>
          </Page>

      </div>
    </div>
  );
}

export default App
