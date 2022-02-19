import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
	[selectCart],
	cart => cart.cartItems
);

export const selectCartHidden = createSelector(
	[selectCart],
	cart => cart.hidden
);

/*  
Reselect exposes the createSelector API which allows us to build a memoized selector. 
selectCartItemsCount will be calculated the first time the function runs. If the same function is called again, but the input (the result of selectCartItems) has not changed, the function will simply return a cached calculation of the items and their totals.

calculate the total number of items in the cart
*/
export const selectCartItemsCount = createSelector(
	[selectCartItems],
	cartItems =>
		cartItems.reduce(
			(accumalatedQuantity, cartItem) =>
				accumalatedQuantity + cartItem.quantity,
			0
		)
);
// Calculate the total cost of items in the cart to be used in the checkout page
export const selectCartTotal = createSelector([selectCartItems], cartItems =>
	cartItems.reduce(
		(accumalatedQuantity, cartItem) =>
			accumalatedQuantity + cartItem.quantity * cartItem.price,
		0
	)
);
