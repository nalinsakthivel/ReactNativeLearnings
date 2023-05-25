import {DrawerContentScrollView} from '@react-navigation/drawer';
import React from 'react';
import {ReactNode, RefAttributes} from 'react';
import {
  ScrollView,
  ScrollViewProps,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';

export function CustomDrawerContent(
  props: JSX.IntrinsicAttributes &
    ScrollViewProps & {children: ReactNode} & RefAttributes<ScrollView>,
) {
  const width = useWindowDimensions().width * 0.3;

  return (
    <DrawerContentScrollView {...props}>
      <View>
        <Text>Hee</Text>
      </View>
    </DrawerContentScrollView>
  );
}
