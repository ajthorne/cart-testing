import React from 'react';
import store from '../store';

const CartItem = React.createClass({
  addItem: function () {
    store.cart.addItem()
  },
  removeItem: function () {
    store.cart.removeItem()
  },
  render: function () {
    return (
      <li>
      {this.props.item}
      <input onClick={this.addItem} type="button" value="Add"/>
      <input onClick={this.removeItem} type="button" value="Delete"/>
      </li>
    )
  }
})

export default CartItem;
