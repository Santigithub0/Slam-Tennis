import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCnYVvLyJdyQQhaFdrbkZUNZ-Q2uX4KUYA",
  authDomain: "slam-tennis.firebaseapp.com",
  projectId: "slam-tennis",
  storageBucket: "slam-tennis.appspot.com",
  messagingSenderId: "476641821157",
  appId: "1:476641821157:web:2ecec462082bfdb0f6ef0c"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);