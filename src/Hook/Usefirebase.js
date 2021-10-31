import React, { useEffect, useState } from 'react';
import initializeAuthentication from '../Firebase/firebse.initali';
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged ,signOut } from "firebase/auth";
initializeAuthentication();

const Usefirebase = () => {
    const [user,setUser] = useState({})
    const [error,setError] = useState('')

    const auth = getAuth();
  
    const googleSingIn = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth,googleProvider)
        .then((result) => {
            console.log(result.user)
         setUser(result.user)
        })
        .catch((error)=>{
            setError(error.message)
        })
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user){
                console.log('hello banglases' , user)
                setUser(user)
            }
        })
    },[])
    
    const logOut = () => {
        signOut(auth)
        .then(() => {
            setUser({})
        })

    }

    return {
        user,
        googleSingIn,
        logOut,
        error
   }
};

export default Usefirebase;