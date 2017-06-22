import { grey500 } from 'material-ui/styles/colors'
import Cancel from 'material-ui/svg-icons/navigation/cancel'
import { IconButton } from 'material-ui'
import React from 'react'

export const OrderItem = (props) => {
  return (
    <li>
      <IconButton onClick={props.handleRemoveOrder}>
        <Cancel color={grey500}/>
      </IconButton>
      <span className="order-item">{props.name}</span>
      <span className="qty">{props.order}</span>
    </li>
  )
}

