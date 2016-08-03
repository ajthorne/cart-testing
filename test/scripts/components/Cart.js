import { shallow } from 'enzyme';
import { expect } from 'chai';
import React from 'react';
import CartFull from '../../../app/scripts/components/CartItem';
import store from '../../../app/scripts/store';

describe('<CartFull/> component', function () {
  let cart = shallow(<CartFull />);

  it('should exist', () => {
    expect(cart).to.exist
  })

  it('should render a div to the dom', function () {
    expect(cart.is('div')).to.be.true
  })

  it('should map over an array and return array', function () {
    expect()
  })
})
