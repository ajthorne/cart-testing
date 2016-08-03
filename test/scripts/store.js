import { expect } from 'chai';
import store from '../../app/scripts/store';

describe('Store module', function () {
  it('exists', () => {
    expect(store).to.exist
  });
  it('should have a cart property', () => {
    expect(store).to.have.property('cart');
  })
})

  describe('store.cart', function () {
    it('should have an items array', () => {
      expect(store.cart.get('items')).that.is.an.array
    })
    it('should have a total with default value 0', () => {
      expect(store.cart.get('total')).to.equal(0)
    })
    it('should have function to add an item', () => {
      store.cart.addItem('cheese', 2.99);
      expect(store.cart.get('items')).to.be.deep.equal([{
        item: 'cheese',
        cost: 2.99
      }])
    })
    // it('should have a function to delete an item', () => {
    //   expect(store.cart.removeItem[{item: 'cheese', price: '2.99'}])
    // })
    it('should have a function to calculate total', () => {
      store.cart.addItem('cheese', 3.00);
      store.cart.addItem('milk', 2.50);
      expect(store.cart.get(total)).to.be.deep.equal(5.50)
    })
  })
