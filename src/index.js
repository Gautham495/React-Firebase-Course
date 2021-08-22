import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from "firebase/app";

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

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
