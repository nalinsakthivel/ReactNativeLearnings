import {View, Text} from 'react-native';
import React from 'react';
import {NavigationParamList} from '../routes/NaviagatioUtil';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';
import {useProductDetailsScreen} from '../hooks/useProductDetailsScreen';

export type ProductDetailsScreenProps = {
  navigation: NativeStackNavigationProp<
    NavigationParamList,
    'ProductDetailsScreen'
  >;
  route: RouteProp<NavigationParamList, 'ProductDetailsScreen'>;
};

const ProductDetailsScreen = (props: ProductDetailsScreenProps) => {
  useProductDetailsScreen(props);

  return (
    <View>
      <Text>ProductDetailsScreen</Text>
    </View>
  );
};

export default ProductDetailsScreen;
