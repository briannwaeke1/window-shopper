import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.styles.scss';
import { connect } from 'react-redux';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors';

export const CartDropdown = ({ cartItems }) => (
	<div className='cart-dropdown'>
		<div className='cart-items'>
			{cartItems.map(cartItem => (
				<CartItem key={cartItem.id} item={cartItem} />
			))}
		</div>
		<CustomButton>GO TO CHECKOUT</CustomButton>
	</div>
);

/*  This prevents the component from being re-rendered whenever the state changes, when it is unrelated to the cart items */
const mapStateToProps = state => ({
	cartItems: selectCartItemsCount(state)
});

export default connect(mapStateToProps)(CartDropdown);
