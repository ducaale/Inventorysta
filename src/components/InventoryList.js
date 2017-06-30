import { InventoryItem } from './InventoryItem'
import { partial } from '../lib/utils'
import { changeSelected } from '../actions'

import React from 'react'
import { connect } from 'react-redux'

let InventoryList = ({items, inventoryMode, handleInputChange}) => {
  const style = {
    flex: 2
  }
  return (
    <div style={style}>
      <div className="card">
        <div className="card-header">
          <h1>Inventory</h1>
        </div>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th className="numeric">Unit Cost</th>
              <th className="numeric">Unit Price</th>
              <th className="numeric">Quantity</th>
              <th className="numeric">Selected</th>
            </tr>
          </thead>
          <tbody>
            {items.map(item => <InventoryItem key={item.id} {...item}
              handleInputChange={ partial(handleInputChange, item.id) }
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
    handleInputChange: (id, evt) => dispatch(changeSelected(id, evt.target.value)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(InventoryList)
