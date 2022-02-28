import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
	apiKey: 'AIzaSyCWB59lSLYl3jEul6Nhtv-_BMJztZ2rO0w',
	authDomain: 'window-shopper-db.firebaseapp.com',
	projectId: 'window-shopper-db',
	storageBucket: 'window-shopper-db.appspot.com',
	messagingSenderId: '1096913043902',
	appId: '1:1096913043902:web:d597a9e65fa5f35256b9ef',
	measurementId: 'G-NB0CGPENGV'
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();
	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			});
		} catch (error) {
			console.log('error creating user', error.message);
		}
	}

	return userRef;
};

export const addCollectionAndDocuments = async (
	collectionKey,
	objectsToAdd
) => {
	const collectionRef = firestore.collection(collectionKey);
	const batch = firestore.batch(); // group all db requests

	objectsToAdd.forEach(obj => {
		const newDocRef = collectionRef.doc(); // new document reference with auto generated id
		batch.set(newDocRef, obj); // document reference and value
	});

	return await batch.commit(); // batch request returns a promise, if successful, return a null value, allowing chaining off the function
};

export const convertCollectionsSnapshotToMap = collections => {
	const transformedCollection = collections.docs.map(doc => {
		const { title, items } = doc.data();

		return {
			routeName: encodeURI(title.toLowerCase()),
			id: doc.id,
			title,
			items
		};
	});
	return transformedCollection.reduce((accumulator, collection) => {
		accumulator[collection.title.toLowerCase()] = collection;
		return accumulator;
	}, {});
};

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider(); // access to the Google auth provider class

provider.setCustomParameters({ prompt: 'select_account' }); // always trigger the google pop up

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
