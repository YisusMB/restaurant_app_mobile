import React, { useReducer } from 'react';
import _ from 'lodash';
import firebase from '../../firebase/index';
import FirebaseReducer from './firebaseReducer';
import FirebaseContext from './firebaseContext';
import { SUCCESS_GET_PRODUCTS } from '../../types';

const FirebaseState = (props) => {
  const initialState = {
    menu: [],
  };

  const [state, dispatch] = useReducer(FirebaseReducer, initialState);

  const getProducts = () => {
    const handleSnapshot = (snapshot) => {
      const dishes = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      const orderDishes = _.sortBy(dishes, 'category');
      dispatch({
        type: SUCCESS_GET_PRODUCTS,
        payload: orderDishes,
      });
    };
    firebase.db.collection('productos')
      .where('availability', '==', true)
      .onSnapshot(handleSnapshot);
  };

  return (
    <FirebaseContext.Provider
      value={{
        menu: state.menu,
        firebase,
        getProducts,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};

FirebaseState.propTypes = {
  children: () => {},
};

export default FirebaseState;
