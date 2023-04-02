import React from 'react'
import { connect } from 'react-redux'
import { addItem, removeItem } from '../actions/cartActions'

function ShoppingCart(props) {
  const addItemToCart = () => {
    const generatedId = Math.floor(Math.random() * 100);
    const item = { id: generatedId, name: 'Item', price: 10 + generatedId }
    props.addItem(item)
    console.log(item);
  }

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {props.items.map(item => (
          <li key={item.id}>
            {item.name} - {item.price}
            <button onClick={() => props.removeItem(item.id, item.price)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total price: {props.totalPrice}</p>
      <button onClick={addItemToCart}>Add item</button>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    items: state.items,
    totalPrice: state.totalPrice
  }
}

const mapDispatchToProps = {
  addItem,
  removeItem
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingCart)
