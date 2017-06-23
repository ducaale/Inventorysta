import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { RaisedButton } from 'material-ui'
import { OrderItem } from './OrderItem'
import { partial } from '../lib/utils'
import { resetSelection, submitOrder, submitResupply } from '../actions'

import React from 'react'
import { connect } from 'react-redux'

export const OrderList = ({
  selectedItems,
  inventoryPage,
  handleRemoveSelected,
  handleSubmitOrder,
  handleSubmitResupply
}) => {

  const buttonStyle = {
    float: "right",
  }

  const handleClick = inventoryPage === 'SELL_PAGE' ? handleSubmitOrder : handleSubmitResupply

  return (
    <div className="order">
      <MuiThemeProvider>
        <div>
          <h1>{inventoryPage === 'SELL_PAGE' ? 'Check-out List' : 'Check-in List'}</h1>

          { selectedItems.length > 0 ? <ul>
            {selectedItems.map(item =>
              <OrderItem {...item}
                key={item.id}
                handleRemoveSelected={partial(handleRemoveSelected, item.id)}
              />
            )}
          </ul> : <p className="empty-message">check-out items will appear here</p>}

          {selectedItems.length > 0 ?
          <RaisedButton label="submit"
            style={buttonStyle}
            primary={true}
            onClick={handleClick} /> : null}
        </div>
      </MuiThemeProvider>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    selectedItems: state.items.filter(item => item.selected > 0),
    inventoryPage: state.inventoryPage
  }
} 

const mapDispatchToProps = (dispatch) => {
  return {
    handleRemoveSelected: (id) => dispatch(resetSelection(id)),
    handleSubmitOrder: () => dispatch(submitOrder()),
    handleSubmitResupply: () => dispatch(submitResupply()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderList)
