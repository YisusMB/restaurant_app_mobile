import React, { useReducer } from 'react';
import OrderReducer from './orderReducer';
import OrderContext from './orderContext';

const OrderState = (props) => {
  const initialState = {
    order: [],
  };

  const [state, dispatch] = useReducer(OrderReducer, initialState);

  return (
    <OrderContext.Provider
      value={{
        order: state.order,
      }}
    >
      {props.children}
    </OrderContext.Provider>
  );
};

OrderState.propTypes = {
  children: () => {},
};

export default OrderState;
