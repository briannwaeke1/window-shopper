import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
	[selectShop],
	shop => shop.collections
);

/* 
Object.keys gets the keys of an object that is passed into it, and returns an array of the keys.

This is necessary because Shop Data has been converted into a hash table for performance reasons.
We can now map over the array of keys (Hats, Jackets, etc) to get the value of the collections object at that particular key. 
*/

export const selectCollectionsForPreview = createSelector(
	[selectCollections],
	collections => Object.keys(collections).map(key => collections[key])
);


export const selectCollection = memoize(collectionUrlParam =>
	createSelector(
		[selectCollections],
		collections => collections[collectionUrlParam]
	)
);
