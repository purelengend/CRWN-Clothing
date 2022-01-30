import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyApQKfIc_UfPADj7-LmPNInOsPy34UAiN8",
    authDomain: "crwn-db-62b0b.firebaseapp.com",
    projectId: "crwn-db-62b0b",
    storageBucket: "crwn-db-62b0b.appspot.com",
    messagingSenderId: "476049351484",
    appId: "1:476049351484:web:52626976c0792d8f80b439",
    measurementId: "G-JZL4XLD108"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return
    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date()

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log(error.message);
        }

    }
    return userRef
}

export default firebase