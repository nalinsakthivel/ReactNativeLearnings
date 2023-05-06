import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Key} from 'react';

import {useHome} from '../hooks/useHome';
import {colours} from '../values/colours';
import {ProductPodt} from '../viewmodel/HomeViewModel';
import Card from '../componenets/Card';
import {t} from 'i18next';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp, useNavigation} from '@react-navigation/native';
import {NavigationParamList} from '../routes/NaviagatioUtil';

export type HomeScreenProps = {
  navigation: NativeStackNavigationProp<NavigationParamList, 'HomeScreen'>;
  route: RouteProp<NavigationParamList, 'HomeScreen'>;
};

const HomeScreen = (props: HomeScreenProps) => {
  const {product, setLanguage, language, onProductPress} = useHome(props);
  const prod: ProductPodt[] = product;
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.mainContainer} testID={'Home'}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.toggleDrawer();
          }}
          style={{
            marginLeft: 10,
            width: 50,
          }}>
          <Text style={{textAlign: 'center'}}>Menu</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.headerContainer}
          onPress={() => {
            language === 'tn' ? setLanguage('en') : setLanguage('tn');
          }}>
          <Text style={styles.headerText}>{t('hello').toString()}</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={prod}
        renderItem={(item: any, index: Key) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              onProductPress(item.item.id);
            }}>
            <Card list={item.item} />
          </TouchableOpacity>
        )}
      />
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
