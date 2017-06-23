const initialState = [
  { id: 1, name: 'bir24cm', unitPrice: 300, qty: 500, selected: 0 },
  { id: 2, name: 'bir24cm', unitPrice: 300, qty: 500, selected: 0 },
  { id: 3, name: 'bir24cm', unitPrice: 300, qty: 500, selected: 0 },
  { id: 4, name: 'bir24cm', unitPrice: 300, qty: 500, selected: 0 },
  { id: 5, name: 'bir24cm', unitPrice: 300, qty: 500, selected: 0 },
  { id: 6, name: 'bir24cm', unitPrice: 300, qty: 500, selected: 0 },
  { id: 7, name: 'bir24cm', unitPrice: 300, qty: 500, selected: 0 },
  { id: 8, name: 'bir24cm', unitPrice: 300, qty: 500, selected: 0 },
  { id: 9, name: 'bir24cm', unitPrice: 300, qty: 500, selected: 0 },
  { id: 10, name: 'bir24cm', unitPrice: 300, qty: 500,selected: 0 },
  { id: 11, name: 'bir24cm', unitPrice: 300, qty: 500,selected: 0 },
  { id: 12, name: 'bir24cm', unitPrice: 300, qty: 500,selected: 0 },
]

const item = (state, action) => {
  switch(action.type) {
    case 'ADD_ITEM':
      return {
        id: action.id,
        name: action.name,
        qty: action.qty,
        unitPrice: action.unitPrice,
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
