const ShopActionTypes = {
	// states that shop actions can be in when fetching asynchronous data
	FETCH_COLLECTIONS_START: 'FETCH_COLLECTIONS_START', // when first API call to firestore begins
	FETCH_COLLECTIONS_SUCCESS: 'FETCH_COLLECTIONS_SUCCESS', // API call is successful
	FETCH_COLLECTIONS_FAILURE: 'FETCH_COLLECTIONS_FAILURE' // API call failed
};

export default ShopActionTypes;
