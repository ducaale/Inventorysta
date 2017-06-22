import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { RaisedButton } from 'material-ui'
import { OrderItem } from './OrderItem'
import { partial } from '../lib/utils'

import React from 'react'
import { connect } from 'react-redux'

const getOrderedItems = (items, inventoryMode) => { 
  if(inventoryMode === 'SELL_MODE')
    return items.filter(item => item.order > 0)
  else
    return items.filter(items => items.supply > 0)
}

export const OrderList = ({orderedItems, inventoryMode, handleRemoveOrder, handleSubmitOrder}) => {
  const buttonStyle = {
    float: "right",
  }
  return (
    <div className="order">
      <MuiThemeProvider>
        <div>
          <h1>{inventoryMode === 'SELL_MODE' ? 'Check-out List' : 'Check-in List'}</h1>

          { orderedItems.length > 0 ? <ul>
            {orderedItems.map(item =>
              <OrderItem {...item}
                key={item.id}
                handleRemoveOrder={partial(handleRemoveOrder, item.id)} />
            )}
          </ul> : <p className="empty-message">check-out items will appear here</p>}

          {orderedItems.length > 0 ?
          <RaisedButton label="submit"
            style={buttonStyle}
            primary={true}
            onClick={handleSubmitOrder} /> : null}
        </div>
      </MuiThemeProvider>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    orderedItems: getOrderedItems(state.items, state.inventoryMode),
    inventoryMode: state.inventoryMode
  }
} 

const mapDispatchToProps = (dispatch) => {
  return {
    handleRemoveOrder: (id) => dispatch({ type: 'RESET_ORDER', id }),
    handleSubmitOrder: () => dispatch({ type: 'SUBMIT_ORDER' })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderList)
