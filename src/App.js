import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { NavBar } from './Components/NavBar/NavBar';
import { Menu } from './Components/Menu/Menu';
import { GlobalStyle } from './Components/Style/GlobalStyle';
import { ModalItem } from './Components/Modal/ModalItem';
import { Order } from './Components/Order/Order';
import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrders } from './Components/Hooks/useOrders';
import { useAuth } from './Components/Hooks/useAuth';

const firebaseConfig = {
  apiKey: "AIzaSyATp7BgTJ8aGZAa5rfI4HW6p82mFgm-y4U",
  authDomain: "mrdonalds-51a24.firebaseapp.com",
  databaseURL: "https://mrdonalds-51a24-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "mrdonalds-51a24",
  storageBucket: "mrdonalds-51a24.appspot.com",
  messagingSenderId: "616586392670",
  appId: "1:616586392670:web:1d16a5696634cdb33ab0cf",
  measurementId: "G-2BYFC5105E"
};

firebase.initializeApp(firebaseConfig);

function App() {
  const auth = useAuth(firebase.auth);

  const openItem = useOpenItem();
  const orders = useOrders();

  return (
    <>
      <GlobalStyle />
      <NavBar {...auth} />
      <Order {...orders} {...openItem} />
      <Menu {...openItem} />
      {openItem.openItem && <ModalItem {...openItem} {...orders} />}
    </>
  );
}

export default App;
