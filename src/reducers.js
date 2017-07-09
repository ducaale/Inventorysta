const initialState = JSON.parse(localStorage.getItem('items')) || []

let id = initialState.length > 0 ? initialState[initialState.length - 1].id + 1 : 1

const item = (state, action) => {
  switch(action.type) {
    case 'ADD_ITEM':
      return {
        id: id++,
        name: action.name,
        qty: parseInt(action.qty, 10),
        unitCost: parseFloat(action.unitCost, 10),
        unitPrice: parseFloat(action.unitPrice, 10),
        selectedAmount: 0,
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
        selectedAmount: 0,
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
    case 'RESET_SELECTED_AMOUNT':
      if(action.id !== state.id) {
        return state
      }

      return {
        ...state,
        selectedAmount: 0
      }
    case 'CHANGE_SELECTED_AMOUNT':
      if(action.id !== state.id) {
        return state
      }

      return {
        ...state,
        selectedAmount: action.value > 0 ? parseInt(action.value, 10) : 0
      }
    case 'SUBMIT_ORDER':
      return {
        ...state,
        qty: state.qty - state.selectedAmount,
        selectedAmount: 0
      }
    case 'SUBMIT_RESUPPLY':
      return {
        ...state,
        qty: state.qty + state.selectedAmount,
        selectedAmount: 0
      }
    default:
      return state
  }
}

export const items = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_ITEM':
      return [
        ...state,
        item(undefined, action)
      ]
    case 'REMOVE_ITEM':
      return state.filter(t => !t.selected )
    case 'RESET_SELECTED_AMOUNT':
    case 'CHANGE_SELECTED_AMOUNT':
    case 'SUBMIT_ORDER':
    case 'SUBMIT_RESUPPLY':
    case 'TOGGLE_SELECT_ITEM':
    case 'EDIT_ITEM':
      return state.map(t => item(t, action))
    default:
      return state
  } 
}

export const inventoryPage = (state = 'SELL_PAGE', action) => {
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
