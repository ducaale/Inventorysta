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
        selected: 0
      }
    case 'RESET_SELECTION':
      if(action.id !== state.id) {
        return state
      }

      return {
        ...state,
        selected: 0
      }
    case 'CHANGE_SELECTION':
      if(action.id !== state.id) {
        return state
      }

      return {
        ...state,
        selected: action.value > 0 ? parseInt(action.value, 10) : 0
      }
    case 'SUBMIT_ORDER':
      return {
        ...state,
        qty: state.qty - state.selected,
        selected: 0
      }
    case 'SUBMIT_RESUPPLY':
      return {
        ...state,
        qty: state.qty + state.selected,
        selected: 0
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
    case 'RESET_SELECTION':
    case 'CHANGE_SELECTION':
    case 'SUBMIT_ORDER':
    case 'SUBMIT_RESUPPLY':
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
