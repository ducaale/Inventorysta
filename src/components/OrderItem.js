import { grey500 } from 'material-ui/styles/colors'
import Cancel from 'material-ui/svg-icons/navigation/cancel'
import { IconButton } from 'material-ui'
import React from 'react'

export const OrderItem = ({name, selected, handleRemoveSelected}) => {
  return (
    <li>
      <IconButton onClick={handleRemoveSelected} aria-label="cancel">
        <Cancel color={grey500}/>
      </IconButton>
      <span className="order-item">{name}</span>
      <span className="qty">{selected}</span>
    </li>
  )
}

