/* eslint-disable no-unused-expressions */
import React, {useEffect} from "react";
import { signInWithGoogle, auth, db } from "./Firebase";
import firebase from "firebase/app";
import { useAuthState } from 'react-firebase-hooks/auth';
const Login = () => {

    const [user] = useAuthState(firebase.auth());

    // authenticated --> Gets all the details which we got from google
    // not --> undefined

    const onAuthStateChanged = async (userAuth) => {
        if (!userAuth) {
          return;
        }
      
        const userReference = db.collection("users").doc(userAuth.uid);
        const snapShot = await userReference.get();
      
        if (snapShot.exists) {
            alert("User Exists")
        }
      
        if (!snapShot.exists) {
          const { displayName, email, photoURL, uid } = userAuth;
         
          try {

            userReference.set({
                displayName:displayName,
                email:email,
                uid:uid,
                photoURL:photoURL
            })

          } catch (error) {
            console.log(error);
          }
        }
      
        return () => userReference();
      };
      
      useEffect(() => {
        auth.onAuthStateChanged(onAuthStateChanged)
      }, [user]);
      
  return (
    <div>
      <button onClick={signInWithGoogle}> Sign In With Google </button>
    </div>
  );
};

export default Login;

// onAuthChanged
// Signup
// Login

//  firebase.auth().signOut();