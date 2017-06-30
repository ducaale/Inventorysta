import React from 'react'

export const InventoryItem = ({name, unitCost, unitPrice, qty, selected, handleInputChange}) => {
  return (
    <tr>
      <td>{name}</td>
      <td className="numeric">{unitCost}</td>
      <td className="numeric">{unitPrice}</td>
      <td className="numeric">{qty}</td>
      <td className="numeric">
        <input type="number" value={selected}
          className="numeric"
          onChange={handleInputChange}/>
      </td>
    </tr>
  )
}
