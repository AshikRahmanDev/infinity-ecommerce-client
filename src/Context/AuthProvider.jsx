import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../Firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  // create user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // signin
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // logout
  const logout = () => {
    return signOut(auth);
  };
  // update Name
  const updateUser = (displayName) => {
    return updateProfile(auth.currentUser, { displayName });
  };
  // save current user
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unSubscribe;
  }, []);

  const userInfo = { createUser, signIn, updateUser, user, logout };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
