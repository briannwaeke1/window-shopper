// Import the functions needed from the SDKs
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// Firebase configuration
const config = {
	apiKey: 'AIzaSyCWB59lSLYl3jEul6Nhtv-_BMJztZ2rO0w',
	authDomain: 'window-shopper-db.firebaseapp.com',
	projectId: 'window-shopper-db',
	storageBucket: 'window-shopper-db.appspot.com',
	messagingSenderId: '1096913043902',
	appId: '1:1096913043902:web:d597a9e65fa5f35256b9ef',
	measurementId: 'G-NB0CGPENGV'
};

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

// Initialize Firebase
firebase.initializeApp(config);

// Export authentication and firebase library to be used in App
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Set up Google authentication utility which gives us access to the Google auth provider class from the auth library.
const provider = new firebase.auth.GoogleAuthProvider();
// Set up custom parameter to always trigger the google pop up whenever this google auth provider is used for authentication and sign-on
provider.setCustomParameters({ prompt: 'select_account' });
// Only export sign in with google method
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
