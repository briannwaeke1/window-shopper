import ShopActionTypes from './shop.types';
import {
	firestore,
	convertCollectionsSnapshotToMap
} from '../../firebase/firebase.utils';

// Thunk are a action creator that returns a function that gets the dispatch

export const fetchCollectionsStart = () => ({
	type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collectionsMap => ({
	type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
	payload: collectionsMap
});

export const fetchCollectionsFailure = errorMessage => ({
	type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
	payload: errorMessage
});

// asynchronous redux thunk method that allows us to dispatch multiple actions to the reducer
export const fetchCollectionsStartAsync = () => {
	// redux thunk allows us to dispatch a function, which returns an action object when invoked
	return dispatch => {
		const collectionRef = firestore.collection('collections');
		dispatch(fetchCollectionsStart());

		collectionRef
			.get()
			.then(snapshot => {
				const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
				dispatch(fetchCollectionsSuccess(collectionsMap));
			})
			.catch(error => dispatch(fetchCollectionsFailure(error.message)));
	};
};
