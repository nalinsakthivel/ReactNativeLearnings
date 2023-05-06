import React from 'react';
import LoginScreen from '../screens/Login';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './RootNavigation';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SettingsScreen from '../screens/Settings';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import SplashScreen from '../screens/Splash';

import {createDrawerNavigator} from '@react-navigation/drawer';
import ProductDetailsScreen from '../screens/ProductDetails';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen name="Home" component={MyTabs} />
    </Drawer.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size, focused}) => (
            <Icons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({color, size, focused}) => (
            <Icons name="bell" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

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
