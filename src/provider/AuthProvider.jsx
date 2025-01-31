/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { AuthContext } from '../context';
import { auth } from '../database/firevase.init';
import { useEffect, useState } from 'react';
import { GoogleAuthProvider } from 'firebase/auth';

function AuthProvider({ children }) {
   const provider = new GoogleAuthProvider();  // GoogleAuthProvider এর নতুন ইন্সট্যান্স তৈরি

   const [user, setUser] = useState(null);


   const [loading, setLoading] = useState(false);

   const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
   };

   const signIn = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
   };

   const signInWithGoogle = () => {
      setLoading(true);
      return signInWithPopup(auth, provider);  // provider পাস করা হচ্ছে এখানে
   };

   const logOut = async () => {
      setLoading(true);
      return signOut(auth);
   };

   const updateUserProfile = (name, photo) => {
      return updateProfile(auth.currentUser, {
         displayName: name,
         photoURL: photo,
      });
   };

   useEffect(() => {
      const unSubscrib = onAuthStateChanged(auth, (currentUser) => {
         if (currentUser) {
            
            setUser(currentUser)

         } else {
            console.log("user is logged out");
            setUser(null);

         }
      });

      return () => {
         unSubscrib();
      }
   }, [])



   const authInfo = {
      user,
      setUser,
      loading,
      setLoading,
      createUser,
      signIn,
      signInWithGoogle,
      logOut,
      updateUserProfile,
   };

   return (
      <AuthContext.Provider value={authInfo}>
         {children}
      </AuthContext.Provider>
   );
}

export default AuthProvider;
