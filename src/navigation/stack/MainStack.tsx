import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {
  CartScreen,
  HomeScreen,
  ProductDetailScreen,
  // NEW SCREEN IMPORT HERE
} from 'screens';
import RouteName from '../RouteName';

const Stack = createNativeStackNavigator();

export const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={RouteName.HOME}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={RouteName.HOME} component={HomeScreen} />
      <Stack.Screen
        name={RouteName.PRODUCT_DETAIL}
        component={ProductDetailScreen}
      />
      <Stack.Screen name={RouteName.CART} component={CartScreen} />
      {/* NEW SCREEN HERE */}
    </Stack.Navigator>
  );
};
