import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions.js';

import {
	CartDropdownContainer,
	CartDropdownButton,
	EmptyMessageContainer,
	CartItemsContainer
} from './cart-dropdown.styles';

const CartDropdown = ({ cartItems, history, dispatch }) => (
	<CartDropdownContainer>
		<CartItemsContainer>
			{cartItems.length ? (
				cartItems.map(cartItem => (
					<CartItem key={cartItem.id} item={cartItem} />
				))
			) : (
				<EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
			)}
		</CartItemsContainer>
		<CartDropdownButton
			onClick={() => {
				history.push('/checkout');
				dispatch(toggleCartHidden());
			}}
		>
			GO TO CHECKOUT
		</CartDropdownButton>
	</CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems
});

/* The connect() function connects a React component to a Redux store. 
The return of connect() is a wrapper function that takes your component and returns a wrapper component with the additional props it injects.
If a mapStateToProps function is specified, the new wrapper component will subscribe to Redux store updates. This means that any time the store is updated, mapStateToProps will be called.

withRouter provides access to the history object’s properties and the closest <Route>'s match via the withRouter higher-order component. withRouter will pass updated match, location, and history props to the wrapped component whenever it renders. */
export default withRouter(connect(mapStateToProps)(CartDropdown));
