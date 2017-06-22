import React from 'react'

export const InventoryItem = (props) => {
  return (
    <tr>
      <td>{props.name}</td>
      <td className="numeric">{props.unitPrice}</td>
      <td className="numeric">{props.qty - props.order}</td>
      <td className="numeric">
        {props.inventoryMode==='SELL_MODE'? 
        <input type="number" value={props.order}
          className="numeric"
          onChange={props.handleOrderChange}/>
            :
        <input type="number" value={props.supply}
          className="numeric"
          onChange={props.handleSupplyChange}/>
        }
      </td>
    </tr>
  )
}
