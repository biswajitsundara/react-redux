export const addItem = item => ({
  type: 'ADD_ITEM',
  item
})

export const removeItem = (itemId, itemPrice) => ({
  type: 'REMOVE_ITEM',
  itemId,
  itemPrice
})