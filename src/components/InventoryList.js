import { InventoryItem } from './InventoryItem'
import { partial } from '../lib/utils'

import React from 'react'
import { connect } from 'react-redux'

let InventoryList = ({items, inventoryMode, handleOrderChange, handleSupplyChange, restockMode, sellMode}) => {
  const style = {
    flex: 2
  }
  return (
    <div style={style}>
      <div className="card">
        <div className="card-header">
          <h1>Inventory</h1>
          <div>
            {inventoryMode === 'SELL_MODE'?
            <button onClick={restockMode}>restock</button> : <button onClick={sellMode}>sell</button> }
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th className="numeric">Unit Price</th>
              <th className="numeric">Quantity</th>
              <th className="numeric">Order</th>
            </tr>
          </thead>
          <tbody>
            {items.map(item => <InventoryItem key={item.id} {...item}
              inventoryMode={inventoryMode}
              handleOrderChange={partial(handleOrderChange, item.id)}
              handleSupplyChange={partial(handleSupplyChange, item.id)}
            />)}
          </tbody>
        </table>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch) => {
  return {
    handleOrderChange: (id, evt) => dispatch({
      type: 'CHANGE_ORDER',
      value: evt.target.value,
      id
    }),
    handleSupplyChange: (id, evt) => dispatch({
      type: 'CHANGE_SUPPLY',
      value: evt.target.value,
      id
    }),
    sellMode: () => dispatch({
      type: 'SET_MODE',
      mode: 'SELL_MODE'
    }),
    restockMode: () => dispatch({
      type: 'SET_MODE',
      mode: 'RESUPPLY_MODE'
    }),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(InventoryList)
