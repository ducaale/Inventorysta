import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { RaisedButton } from 'material-ui'
import { OrderItem } from './OrderItem'
import { partial } from '../lib/utils'
import { resetSelection, submitOrder, submitResupply, addHistory } from '../actions'

import React from 'react'
import { connect } from 'react-redux'

export const OrderList = ({
  selectedItems,
  inventoryPage,
  handleRemoveSelected,
  handleSubmitOrder,
  handleSubmitResupply,
  handleAddHistory
}) => {

  const buttonStyle = {
    float: "right",
  }

  const header = inventoryPage === 'SELL_PAGE' ? 'Check-out' : 'Check-in'
  const handleClick = () => {
    if(inventoryPage === 'SELL_PAGE' ) {
      selectedItems.forEach((item) => {
        handleAddHistory(item.name, item.selectedAmount, 'out', (new Date().toDateString()))
      })
      handleSubmitOrder()
    } else {
      selectedItems.forEach((item) => {
        handleAddHistory(item.name, item.selectedAmount, 'in', (new Date().toDateString()))
      })
      handleSubmitResupply()
    }
  }

  return (
    <div className="order">
      <MuiThemeProvider>
        <div>
          <h1>{`${header} List`}</h1>

          { selectedItems.length > 0 ? <ul>
            {selectedItems.map(item =>
              <OrderItem {...item}
                key={item.id}
                handleRemoveSelected={partial(handleRemoveSelected, item.id)}
              />
            )}
          </ul> : <p className="empty-message">{`${header} items will appear here`}</p>}

          {selectedItems.length > 0 ?
          <RaisedButton label="save"
            style={buttonStyle}
            labelColor="#00BCD4"
            onClick={handleClick} /> : null}
        </div>
      </MuiThemeProvider>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    selectedItems: state.items.filter(item => item.selectedAmount > 0),
    inventoryPage: state.inventoryPage
  }
} 

const mapDispatchToProps = (dispatch) => {
  return {
    handleRemoveSelected: (id) => dispatch(resetSelection(id)),
    handleSubmitOrder: () => dispatch(submitOrder()),
    handleSubmitResupply: () => dispatch(submitResupply()),
    handleAddHistory: (name, qty, status, date) => dispatch(addHistory(name, qty, status, date)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderList)
