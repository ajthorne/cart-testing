import Backbone from 'backbone';

// the cart model should have (at a minimum) an items array and a total
// the cart model should also have methods through which new items can be added and removed from it

const Cart = Backbone.Model.extend({
  defaults: {
    items: [],
    total: 0
  },

  addItem: function (item, cost) {
    let itemAdded = {
      item: item,
      cost: cost
    };
    let itemsArr = this.get('items');
    this.set('items', itemsArr.concat(itemAdded))
    // this.save();
  },

  // removeItem: function (item) {
  //   let itemsArr = this.get('items');
  //   this.set('items', itemsArr.remove(item))
  //   // this.destroy();
  // },

  calculateTotal: function (item) {
    let startTotal = this.get('total');
    let newTotal = startTotal += (item.get('cost'));
    this.set('total', newTotal);
  }
});

export default Cart;
