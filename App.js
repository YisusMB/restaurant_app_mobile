import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FirebaseState from './context/firebase/firebaseState';
import OrderState from './context/orders/orderState';
import NewOrder from './screens/NewOrder';
import Menu from './screens/Menu';
import DishInfo from './screens/DishInfo';
import DishForm from './screens/DishForm';
import OrderInfo from './screens/OrderInfo';
import OrderProgress from './screens/OrderProgress';

const Stack = createStackNavigator();

const App = () => (
    <FirebaseState>
      <OrderState>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#FFDA00',
              },
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          >
            <Stack.Screen
              name="NewOrder"
              component={NewOrder}
              options={{
                title: 'Nueva Orden',
              }}
            />
            <Stack.Screen
              name="Menu"
              component={Menu}
              options={{
                title: 'Menu',
              }}
            />
            <Stack.Screen
              name="DishInfo"
              component={DishInfo}
              options={{
                title: 'Detalle platillo',
              }}
            />
            <Stack.Screen
              name="DishForm"
              component={DishForm}
              options={{
                title: 'Dish Form',
              }}
            />
            <Stack.Screen
              name="OrderInfo"
              component={OrderInfo}
              options={{
                title: 'OrderInfo',
              }}
            />
            <Stack.Screen
              name="OrderProgress"
              component={OrderProgress}
              options={{
                title: 'OrderProgress',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </OrderState>
    </FirebaseState>
);

export default App;
