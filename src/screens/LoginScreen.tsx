/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import MyColors, {colours} from '../values/colours';
import {Controller} from 'react-hook-form';
import useLogin from '../hooks/useLoginScreen';
import {TextInputField} from '../componenets/FormFields';
import {NavigationParamList} from '../routes/NaviagatioUtil';
import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type LoginScreenProps = {
  navigation: NativeStackNavigationProp<NavigationParamList, 'LoginScreen'>;
  route: RouteProp<NavigationParamList, 'LoginScreen'>;
};

const LoginScreen = (props: LoginScreenProps) => {
  const {control, handleSubmit, onSubmit} = useLogin(props);

  return (
    <View style={styles.mainContainer}>
      <Text
        style={{
          color: colours.Black,
          textAlign: 'center',
          marginVertical: 50,
          fontWeight: 'bold',
          fontSize: 25,
        }}>
        Login
      </Text>
      <Controller
        name="userName"
        control={control}
        render={({field: {onChange, value}, fieldState: {error}}) => (
          <TextInputField
            inputProps={{
              placeholder: 'Enter Username',
              value: value,
              onChangeText: onChange,
              editable: true,
              style: {
                width: '90%',
                borderColor: colours.Black,
                borderWidth: 1,
                borderRadius: 5,
                alignSelf: 'center',
              },
            }}
            errorTxt={error?.message?.toString()}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({field: {onChange, value}, fieldState: {error}}) => (
          <TextInputField
            inputProps={{
              placeholder: 'Enter password',
              value: value,
              onChangeText: onChange,
              editable: true,
              style: {
                width: '90%',
                borderColor: colours.Black,
                borderWidth: 1,
                borderRadius: 5,
                alignSelf: 'center',
                marginTop: 20,
              },
            }}
            errorTxt={error?.message?.toString()}
          />
        )}
      />
      <TouchableOpacity
        onPress={handleSubmit(onSubmit)}
        style={{
          marginTop: 30,
          borderWidth: 1,
          borderRadius: 30,
          width: '35%',
          height: 40,
          justifyContent: 'center',
          alignSelf: 'center',
          backgroundColor: MyColors.disableGrey,
        }}>
        <Text
          style={{
            textAlign: 'center',
          }}>
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colours.White,
  },
});
