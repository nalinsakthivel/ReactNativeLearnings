import {DrawerContentScrollView} from '@react-navigation/drawer';
import React from 'react';
import {ReactNode, RefAttributes} from 'react';
import {ScrollView, ScrollViewProps, Text, View} from 'react-native';

export function CustomDrawerContent(
  props: JSX.IntrinsicAttributes &
    ScrollViewProps & {children: ReactNode} & RefAttributes<ScrollView>,
) {
  return (
    <DrawerContentScrollView {...props}>
      <View>
        <Text>FakeStore</Text>
      </View>
    </DrawerContentScrollView>
  );
}
