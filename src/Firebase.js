import firebase from "firebase/app";
import 'firebase/firestore'
import "firebase/auth";
import '@firebase/storage';

var firebaseConfig = {
  apiKey: "AIzaSyDrfshAYMlcfnGPFAHL8fOWqAt7pYEYX-o",
  authDomain: "udemy-course-project-e5a01.firebaseapp.com",
  projectId: "udemy-course-project-e5a01",
  storageBucket: "udemy-course-project-e5a01.appspot.com",
  messagingSenderId: "310200946370",
  appId: "1:310200946370:web:0de762fd6cdf0a257fb55b",
  measurementId: "G-QD4FLBTKRH"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore()
export const auth = firebase.auth();
export const storage = firebase.storage();

const googleProvider = new firebase.auth.GoogleAuthProvider()
export const signInWithGoogle = () => {
  auth.signInWithPopup(googleProvider).then((res) => {
    console.log(res.user)
  }).catch((error) => {
    console.log(error.message)
  })
}