import {SafeAreaView, Image} from 'react-native';
import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NavigationParamList} from '../routes/NaviagatioUtil';
import {RouteProp} from '@react-navigation/native';
import {useSplashScreen} from '../hooks/useSplash';
import {colours} from '../values/colours';

const image = require('../values/assets/image/logo.png');

export type SplashScreenProps = {
  navigation: NativeStackNavigationProp<NavigationParamList, 'SplashScreen'>;
  route: RouteProp<NavigationParamList, 'SplashScreen'>;
};

const SplashScreen = (props: SplashScreenProps) => {
  useSplashScreen(props);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colours.White,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image source={image} />
    </SafeAreaView>
  );
};

export default SplashScreen;
