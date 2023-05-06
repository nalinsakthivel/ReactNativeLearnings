import {Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NavigationParamList} from '../routes/NaviagatioUtil';
import {RouteProp} from '@react-navigation/native';
import {useSettingsScreen} from '../hooks/useSettings';
import {colours} from '../values/colours';

export type SettingsScreenProps = {
  navigation: NativeStackNavigationProp<NavigationParamList, 'SettingsScreen'>;
  route: RouteProp<NavigationParamList, 'SettingsScreen'>;
};

const SettingsScreen = (props: SettingsScreenProps) => {
  const {onClick} = useSettingsScreen(props);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colours.White,
      }}>
      <TouchableOpacity
        style={{
          alignSelf: 'center',
        }}
        onPress={() => {
          onClick();
        }}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SettingsScreen;
