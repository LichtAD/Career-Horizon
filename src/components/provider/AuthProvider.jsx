import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updatePassword, updateProfile } from "firebase/auth";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const providerGoogle = new GoogleAuthProvider();

    const [loading, setLoading] = useState(true);

    const [user, setUser] = useState(null);
    // console.log(user);

    // ! register with email and password
    const regNewUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // ! log in with email and password
    const logInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // ! sign in with google
    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, providerGoogle)
    }

    // ! log out
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    // ! update profile when register
    const updateUserProfile = (updateData) => {
        return updateProfile(auth.currentUser, updateData);
    }

    // ! password reset(with email sent)
    const passwordReset = (email) => {
        return sendPasswordResetEmail(auth, email);
    }

    // ! update profile
    const updateMyProfile = (updateData) => {
        return updateProfile(auth.currentUser, updateData);
    }

    // ! password reset (in another page)
    const passwordResetPage = (newPassword) => {
        updatePassword(auth.currentUser, newPassword)
    }

    const AuthInfo = {
        user,
        setUser,
        regNewUser,
        logInUser,
        loading,
        logOut,
        updateUserProfile,
        signInWithGoogle,
        passwordReset,
        updateMyProfile,
        passwordResetPage,
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })

        return () => {
            unsubscribe();
        }
    }, [])

    return <AuthContext.Provider value={AuthInfo}>
        {children}
    </AuthContext.Provider>
};

export default AuthProvider;