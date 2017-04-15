import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import {RaisedButton, IconButton, AppBar} from 'material-ui';
import {grey500} from 'material-ui/styles/colors';
import Cancel from 'material-ui/svg-icons/navigation/cancel';
import './App.css';

const partial = (fn, ...args) => fn.bind(null, ...args)

const findById = (id, list) => list.find(item => item.id === id)

const updateInventory = (list, updated) => {
  const updatedIndex = list.findIndex(item => item.id === updated.id)
  return [
    ...list.slice(0, updatedIndex),
    updated,
    ...list.slice(updatedIndex+1)
  ]
}

const resetOrder = (item) => ({...item, order: 0})

const OrderItem = (props) => {
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

const OrderList = (props) => {

  const style = {
    flex: 1,
  }
  const buttonStyle = {
    float: "right",
  }

  const items = props.items.filter(item => item.order > 0)

  return (
    <div style={style}>
      <h1>Order List</h1>
      <ul>
        {items.map(item =>
          <OrderItem {...item}
            key={item.id}
            handleRemoveOrder={partial(props.handleRemoveOrder, item.id)} />
        )}
      </ul>

      {items.length > 0 ? 
      <RaisedButton label="submit"
        style={buttonStyle}
        primary={true}
        onClick={props.handleSubmitOrder} /> : null}
    </div>
  )
}

const InventoryItem = (props) => {
  return (
    <tr>
      <td>{props.name}</td>
      <td className="numeric">{props.unitPrice}</td>
      <td className="numeric">{props.qty - props.order}</td>
      <td className="numeric">
        <input type="number" value={props.order}
          className="numeric"
          onChange={props.handleOrderChange}/>
      </td>
    </tr>
  )
}

const InventoryList = (props) => {
  const style = {
    flex: 2
  }
  return (
    <div style={style}>
      <h1>Inventory</h1>
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
          {props.items.map(item => <InventoryItem key={item.id} {...item}
            handleOrderChange={partial(props.handleOrderChange, item.id)}
          />)}
        </tbody>
      </table>
    </div>
  )
}

/*
const SearchForm = (props) => {
  return (
    <input value={props.value} onChange={props.handleInputChange}/>
  )
}
*/

class App extends Component {
  state = {
    items: [
      {id: 1, name: 'Bir dhuuban 25cm', qty: 35, unitPrice: 300, order: 0},
      {id: 2, name: 'Bir 65cm', qty: 21, unitPrice: 360, order: 0},
      {id: 3, name: 'Bir 65cm', qty: 21, unitPrice: 360, order: 0},
      {id: 4, name: 'Bir 15cm', qty: 21, unitPrice: 360, order: 0},
      {id: 5, name: 'Bir 65cm', qty: 21, unitPrice: 360, order: 0},
      {id: 6, name: 'Bir 55cm', qty: 21, unitPrice: 360, order: 0},
      {id: 7, name: 'Bir 65cm', qty: 21, unitPrice: 360, order: 0},
      {id: 8, name: 'Bir 65cm', qty: 21, unitPrice: 360, order: 0},
      {id: 9, name: 'Bir 85cm', qty: 21, unitPrice: 360, order: 0},
      {id: 10, name: 'Bir 65cm', qty: 21, unitPrice: 360, order: 0},
      {id: 11, name: 'Bir 29cm', qty: 60, unitPrice: 270, order: 0}
    ],
    search: ''
  }

  handleInputChange = (evt) => {
    this.setState({
      search: evt.target.value
    })
  }

  handleOrderChange = (id, evt) => {

    const InventoryItem = findById(id, this.state.items)
    const newOrder = {
      ...InventoryItem,
      order: evt.target.value? evt.target.value : 0
    }
    const updated = updateInventory(this.state.items, newOrder)
    this.setState({items: updated})
  }

  handleRemoveOrder = (id, evt) => {
    const removedItem = findById(id, this.state.items)
    const updated = updateInventory(this.state.items, resetOrder(removedItem))
    this.setState({items: updated})
  }

  handleSubmitOrder = () => {
    const updated = this.state.items.map(item => ({
      ...item,
      qty: item.qty - item.order,
      order: 0
    }))
    this.setState({items: updated});
  }

  render() {
    return (
    <MuiThemeProvider>
      <div className="App">
        <AppBar title="Inventory Management System"/>
        <div className="AppContent">
          <InventoryList className="InventoryList"
            items={this.state.items}
            handleIncrement={this.handleIncrement}
            handleDecrement={this.handleDecrement}
            handleOrderChange={this.handleOrderChange}
          />
          <OrderList className="OrderList"
            items={this.state.items}
            handleRemoveOrder={this.handleRemoveOrder}
            handleSubmitOrder={this.handleSubmitOrder}
          />
        </div>
      </div>
    </MuiThemeProvider>
    );
  }
}

export default App;
