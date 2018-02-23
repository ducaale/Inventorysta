const item = (state, action) => {
  switch(action.type) {
    case 'ADD_ITEM':
      return {
        id: action.id,
        name: action.name,
        qty: parseInt(action.qty, 10),
        unitCost: parseFloat(action.unitCost, 10),
        unitPrice: parseFloat(action.unitPrice, 10),
        selected: false
      }
    case 'EDIT_ITEM':
      if(action.id !== state.id) {
        return state
      }

      return {
        id: action.id,
        name: action.name,
        qty: parseInt(action.qty, 10),
        unitCost: parseFloat(action.unitCost, 10),
        unitPrice: parseFloat(action.unitPrice, 10),
        selected: false
      }
    case 'TOGGLE_SELECT_ITEM':
      if(action.id !== state.id) {
        return state
      }

      return {
        ...state,
        selected: !state.selected
      }
    default:
      return state
  }
}

export const items = (state = [], action) => {
  switch(action.type) {
    case 'ADD_ITEM':
      return [
        ...state,
        item(undefined, action)
      ]
    case 'REMOVE_ITEM':
      return state.filter(t => !t.selected )
    case 'TOGGLE_SELECT_ITEM':
    case 'EDIT_ITEM':
      return state.map(t => item(t, action))
    default:
      return state
  }
}

export const salesItem = (state, action) => {
  switch(action.type) {
    case 'ADD_SALES_ITEM':
      return {
        id: action.id,
        item_id: action.item_id,
        qty: action.qty,
        price: action.price,
        amount: action.amount
      }
    case 'EDIT_SALES_ITEM':
      if(action.id !== state.id) {
        return state
      }

      return {
        ...state,
        item_id: action.item_id,
      }
    case 'EDIT_SALES_ITEM_AMOUNT':
      if(action.id !== state.id) {
        return state
      }

      return {
        ...state,
        amount: parseFloat(action.amount, 10)
      }
    case 'EDIT_SALES_ITEM_PRICE':
      if(action.id !== state.id) {
        return state
      }

      return {
        ...state,
        price: parseFloat(action.price, 10),
      }
    case 'EDIT_SALES_ITEM_QTY':
      if(action.id !== state.id) {
        return state
      }

      return {
        ...state,
        qty: parseInt(action.qty, 10),
      }
    default:
      return state
  }
}

const initialSalesItemsState = { id: 'aa099a631f628', item_id: null, qty: 0, price: 0, amount: 0 }

export const salesItems = (state = [initialSalesItemsState], action) => {
  switch(action.type) {
    case 'ADD_SALES_ITEM':
      return [
        ...state,
        salesItem(undefined, action)
      ]
    case 'EDIT_SALES_ITEM':
    case 'EDIT_SALES_ITEM_QTY':
    case 'EDIT_SALES_ITEM_PRICE':
    case 'EDIT_SALES_ITEM_AMOUNT':
      return state.map(t => salesItem(t, action))
    case 'REMOVE_SALES_ITEM':
      return state.filter(t => t.id !== action.id)
    default:
      return state
  }
}

const initialNewInvoiceState = { paid: 0, customerName: '', customerPhone: '' }

export const newInvoice = (state = initialNewInvoiceState, action) => {
  switch(action.type) {
    case 'EDIT_NEW_INVOICE':
      return {
        ...state,
        paid: parseFloat(action.paid, 10),
      }
    case 'EDIT_NEW_INVOICE_CUSTOMER_NAME':
      return {
        ...state,
        customerName: action.customerName
      }
    case 'EDIT_NEW_INVOICE_CUSTOMER_PHONE':
      return {
        ...state,
        customerPhone: action.customerPhone
      }
    default:
      return state
  }
}

export const customers = (state = [], action) => {

}

export const inventoryPage = (state = 'INVOICE_PAGE', action) => {
  switch(action.type) {
    case 'SET_PAGE':
      return action.page
    default:
      return state
  }
}

export const addItemDialog = (state = false, action) => {
  switch(action.type) {
    case 'TOGGLE_ADD_ITEM_DIALOG':
      return state = !state
    default:
      return state
  }
}

export const editItemDialog = (state = false, action) => {
  switch(action.type) {
    case 'TOGGLE_EDIT_ITEM_DIALOG':
      return state = !state
    default:
      return state
  }
}

export const history = (state, action) => {
  switch(action.type) {
      case 'ADD_HISTORY':
        return {
          id: action.id,
          name: action.name,
          qty: parseInt(action.qty, 10),
          status: action.status,
          date: action.date,
        }
    default:
      return state
  }
}

export const historys = (state = [], action) => {
  switch(action.type) {
    case 'ADD_HISTORY':
      return [
        ...state,
        history(undefined, action)
      ]
    default:
      return state
  }
}
