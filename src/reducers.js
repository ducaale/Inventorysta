const initialState = [
  { id: 1, name: 'bir24cm', unitPrice: 300, qty: 500, order: 0, supply: 0 },
  { id: 2, name: 'bir24cm', unitPrice: 300, qty: 500, order: 0, supply: 0 },
  { id: 3, name: 'bir24cm', unitPrice: 300, qty: 500, order: 0, supply: 0 },
  { id: 4, name: 'bir24cm', unitPrice: 300, qty: 500, order: 0, supply: 0 },
  { id: 5, name: 'bir24cm', unitPrice: 300, qty: 500, order: 0, supply: 0 },
  { id: 6, name: 'bir24cm', unitPrice: 300, qty: 500, order: 0, supply: 0 },
  { id: 7, name: 'bir24cm', unitPrice: 300, qty: 500, order: 0, supply: 0 },
  { id: 8, name: 'bir24cm', unitPrice: 300, qty: 500, order: 0, supply: 0 },
  { id: 9, name: 'bir24cm', unitPrice: 300, qty: 500, order: 0, supply: 0 },
  { id: 10, name: 'bir24cm', unitPrice: 300, qty: 500, order: 0, supply: 0 },
  { id: 11, name: 'bir24cm', unitPrice: 300, qty: 500, order: 0, supply: 0 },
  { id: 12, name: 'bir24cm', unitPrice: 300, qty: 500, order: 0, supply: 0 },
]

const item = (state, action) => {
  switch(action.type) {
    case 'ADD_ITEM':
      return {
        id: action.id,
        name: action.name,
        qty: action.qty,
        unitPrice: action.unitPrice,
        order: 0
      }
    case 'RESET_ORDER':
      if(action.id !== state.id) {
        return state
      }

      return {
        ...state,
        order: 0
      }
    case 'CHANGE_ORDER':
      if(action.id !== state.id) {
        return state
      }

      return {
        ...state,
        order: action.value > 0 ? parseInt(action.value, 10) : 0
      }
    case 'CHANGE_SUPPLY':
      if(action.id !== state.id) {
        return state
      }

      return {
        ...state,
        supply: action.value > 0 ? parseInt(action.value, 10) : 0
      }
    case 'SUBMIT_ORDER':
      return {
        ...state,
        qty: state.qty - state.order,
        order: 0
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
    case 'RESET_ORDER':
      return state.map(t => item(t, action)) 
    case 'CHANGE_ORDER':
      return state.map(t => item(t, action))
    case 'CHANGE_SUPPLY':
      return state.map(t => item(t, action))
    case 'SUBMIT_ORDER':
      return state.map(t => item(t, action))
    default:
      return state
  } 
}

export const inventoryMode = (state = 'SELL_MODE', action) => {
  switch(action.type) {
    case 'SET_MODE':
      return action.mode
    default:
      return state
  }
}
