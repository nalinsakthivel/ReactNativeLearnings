import {View, Text} from 'react-native';
import React from 'react';
import {NavigationParamList} from '../routes/NaviagatioUtil';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';

export type ProductDetailsScreenProps = {
  navigation: NativeStackNavigationProp<NavigationParamList, 'SettingsScreen'>;
  route: RouteProp<NavigationParamList, 'SettingsScreen'>;
};

const ProductDetailsScreen = () => {
  return (
    <View>
      <Text>ProductDetailsScreen</Text>
    </View>
  );
};

export default ProductDetailsScreen;
