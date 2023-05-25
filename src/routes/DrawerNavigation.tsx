/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {MyTabs} from './TabNavigation';
import {CustomDrawerContent} from '../componenets/DrawerContent';

const Drawer = createDrawerNavigator();

export function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
      drawerContent={props => (
        <CustomDrawerContent children={undefined} {...props} />
      )}>
      <Drawer.Screen name="Tabs" component={MyTabs} />
    </Drawer.Navigator>
  );
}
