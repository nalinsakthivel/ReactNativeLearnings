import {Text, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import {NavigationParamList} from '../routes/NaviagatioUtil';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';
import {useProductDetailsScreen} from '../hooks/useProductDetailsScreen';
import {colours} from '../values/colours';

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
    <SafeAreaView style={styles.mainContainer}>
      <Text>ProductDetailsScreen</Text>
    </SafeAreaView>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colours.White,
  },
  headerContainer: {
    width: 250,
    alignSelf: 'center',
    height: 40,
    justifyContent: 'center',
  },
  headerText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    color: colours.Black,
  },
});
