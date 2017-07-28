export const setPage = (page) => ({ type: 'SET_PAGE', page })

export const changeSelected = (id, value) => ({
  type: 'CHANGE_SELECTED_AMOUNT', value, id
})

export const resetSelection = (id) => ({ type: 'RESET_SELECTED_AMOUNT', id })

export const submitOrder = () => ({ type: 'SUBMIT_ORDER' })

export const submitResupply = () => ({ type: 'SUBMIT_RESUPPLY' })

export const toggleAddItemDialog = () => ({ type: 'TOGGLE_ADD_ITEM_DIALOG' })

export const toggleEditItemDialog = () => ({ type: 'TOGGLE_EDIT_ITEM_DIALOG' })

export const addItem = (name, unitCost, unitPrice, qty) => ({ type: 'ADD_ITEM', name, unitCost, unitPrice, qty })

export const toggleSelectItem = (id) => ({ type: 'TOGGLE_SELECT_ITEM', id })

export const removeItem = () => ({ type: 'REMOVE_ITEM' })

export const editItem = (id, name, unitCost, unitPrice, qty) => ({ type: 'EDIT_ITEM', id, name, unitCost, unitPrice, qty })

export const addHistory = (name, qty, mode) => ({ type: 'ADD_HISTORY', name, qty, mode })
