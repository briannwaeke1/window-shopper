// Separate file for utility functions to keep files clean and organize functions that may be used in mutiple files.

// Determine if cartItemToAdd already exists in existing cartItems array
export const addItemToCart = (cartItems, cartItemToAdd) => {
	// If a match is found, it will set that cartItem to existingCartItems, otherwise it will be set to undefined
	const existingCartItems = cartItems.find(
		cartItem => cartItem.id === cartItemToAdd.id
	);
	if (existingCartItems) {
		// Using map function to return a new version of the state so that components know to re-render. If id is the same then create a new object where we have the cartItem and increment cartItem quantity by 1, otherwise return the original cartItem as there is no need to update.
		return cartItems.map(cartItem =>
			cartItem.id === cartItemToAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		);
	}

    // If the item is not found inside of the array with existing cart items and now add an object that is equal to cartItemsToAdd, and give it a quantity property with the base value of 1.
    return [...cartItems, {...cartItemToAdd, quantity: 1}];
};
