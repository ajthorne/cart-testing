import { shallow } from 'enzyme';
import { expect } from 'chai';
import React from 'react';
import CartItem from '../../../app/scripts/components/CartItem';
import store from '../../../app/scripts/store';

describe('<CartItem/> component', function () {
  let cartItem = shallow(<CartItem />);

  it('should exist', () => {
    expect(cartItem).to.exist
  })

  it('should render an li to the dom', function () {
    expect(cartItem.is('li')).to.be.true
  })

  it('should contain button to add item', function () {
    expect()
  })
})
