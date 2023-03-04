jest.useFakeTimers();
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

import {useHome} from '../hooks/useHome';
import {colours} from '../values/colours';
import {ProductPodt} from '../viewmodel/HomeViewModel';
import Card from '../componenets/card';

const Home = () => {
  const {onProductList, product} = useHome();
  const prod: ProductPodt[] = product;

  useEffect(() => {
    onProductList();
  }, [onProductList]);

  return (
    <SafeAreaView style={styles.mainContainer} testID={'Home'}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Flat List</Text>
      </View>
      <FlatList data={prod} renderItem={(item: any) => <Card list={item} />} />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colours.White,
  },
  headerContainer: {
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
