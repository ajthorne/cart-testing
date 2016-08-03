// the cart component should display the items in the cart and the correct total cost.

import React from 'react';
import store from '../store';

const CartFull = React.createClass({
  getInitialState: function () {
    return store.cart.toJSON();
  },
  componentDidMount: function () {
    store.cart.on('change update', () => {
      this.setState(store.cart.toJSON())
    });
  },
  render: function () {
    let itemsArr = store.cart.get('items').map(function(item, i, arr) {
      return <CartItem key={i} item={item.item} cost={item.cost}/>
        })
    return (
      <div>
        <ul className="cart-container">
          {itemsArr}
        </ul>
        <p>{store.cart.get('total')}</p>
      </div>
    )
  }
})

export default CartFull;
