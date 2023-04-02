const initialState = {
  items: [],
  totalPrice: 0
}

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        items: [...state.items, action.item],
        totalPrice: state.totalPrice + action.item.price
      }
    case 'REMOVE_ITEM':
      console.log('Remove item..' + JSON.stringify(action));
      const index = state.items.findIndex(item => item.id === action.itemId)
      if (index !== -1) {
        const newItems = [...state.items]
        newItems.splice(index, 1)
        return {
          ...state,
          items: newItems,
          totalPrice: state.totalPrice - action.itemPrice
        }
      }
      return state
    default:
      return state
  }
}

export default cartReducer
