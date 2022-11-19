import {Image, SafeAreaView, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';

import {useHome} from '../hooks/useHome';

const Home = () => {
  const {onProductList, product} = useHome();

  useEffect(() => {
    onProductList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(product);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View>
        <Image source={require('../assets/Image/Menu.png')} />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
