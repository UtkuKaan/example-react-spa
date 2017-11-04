import { firebase, googleAuthProvider } from '../firebase/firebase';

// Action generator for login
export const login = (uid) => ({
    type: 'LOGIN',
    uid
});

// Async Redux Action to start login via Google account
export const startLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
    };
};

//Action generator for logout
export const logout = () => ({
    type: 'LOGOUT'
});

// Async Redux Action to start logout
export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    };
};