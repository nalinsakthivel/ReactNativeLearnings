import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {MyTabs} from './TabNavigation';

const Drawer = createDrawerNavigator();

export function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen name="Home" component={MyTabs} />
    </Drawer.Navigator>
  );
}
