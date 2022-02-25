import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import {
	CartContainer,
	ShoppingIcon,
	ItemCountContainer
} from './cart-icon.styles';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
	<CartContainer onClick={toggleCartHidden}>
		<ShoppingIcon />
		<ItemCountContainer>{itemCount}</ItemCountContainer>
	</CartContainer>
);

/* 
mapDispatchToProps is used for dispatching actions to the store. dispatch is a function of the Redux store. You call store.dispatch to dispatch an action. This is the only way to trigger a state change.
*/
const mapDispatchToProps = dispatch => ({
	toggleCartHidden: () => dispatch(toggleCartHidden())
});

/*  memoize the calculation of itemCount (cart reducer logic), preventing the reducer logic running on every state change regardless of the calculated value of itemCount */

const mapStateToProps = createStructuredSelector({
	itemCount: selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
