import React from 'react';
import LoginScreen from '../screens/LoginScreen';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './RootNavigation';
import SplashScreen from '../screens/SplashScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import {MyDrawer} from './DrawerNavigation';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer ref={navigationRef} independent={true}>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HomeScreen"
          component={MyDrawer}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProductDetailsScreen"
          component={ProductDetailsScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
