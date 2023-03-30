import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colours} from '../values/colours';
import {Controller} from 'react-hook-form';
import useLogin from '../hooks/useLogin';
import {TextInputField} from '../componenets/FormFields';

const Login = () => {
  const {control, handleSubmit, onSubmit} = useLogin();

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
        name="login"
        control={control}
        render={({field: {onChange, value}, fieldState: {error}}) => (
          <TextInputField
            inputProps={{
              placeholder: '',
              value: value,
              onChangeText: onChange,
              editable: true,
            }}
            errorTxt={error?.message?.toString()}
          />
        )}
      />
      <TouchableOpacity onPress={handleSubmit(onSubmit)}>
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
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colours.White,
  },
});
