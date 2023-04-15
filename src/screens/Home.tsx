/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
// jest.useFakeTimers();
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import {useHome} from '../hooks/useHome';
import {colours} from '../values/colours';
import {ProductPodt} from '../viewmodel/HomeViewModel';
import Card from '../componenets/card';
import {t} from 'i18next';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';
import {NavigationParamList} from '../routes/NaviagatioUtil';

export type HomeScreenProps = {
  navigation: NativeStackNavigationProp<NavigationParamList, 'HomeScreen'>;
  route: RouteProp<NavigationParamList, 'HomeScreen'>;
};

const HomeScreen = (props: HomeScreenProps) => {
  const {product, setLanguage, language} = useHome(props);
  const prod: ProductPodt[] = product;

  return (
    <SafeAreaView style={styles.mainContainer} testID={'Home'}>
      <TouchableOpacity
        style={styles.headerContainer}
        onPress={() => {
          language === 'tn' ? setLanguage('en') : setLanguage('tn');
        }}>
        <Text style={styles.headerText}>{t('hello').toString()}</Text>
      </TouchableOpacity>
      <FlatList data={prod} renderItem={(item: any) => <Card list={item} />} />
    </SafeAreaView>
  );
};

export default HomeScreen;

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
