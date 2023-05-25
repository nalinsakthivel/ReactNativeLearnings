import React, {useEffect, useState} from 'react';
import {AppState, Image, Platform, View} from 'react-native';

const SecurityScreen = () => (
  <View>
    <Image source={require('../src/values/assets/image/logo.png')} />
  </View>
);

const showSecurityScreenFromAppState = (appState: string) =>
  ['background', 'inactive'].includes(appState);

const withSecurityScreenIOS = (Wrapped: JSX.IntrinsicAttributes) => {
  return (props: JSX.IntrinsicAttributes) => {
    const [showSecurityScreen, setShowSecurityScreen] = useState(
      showSecurityScreenFromAppState(AppState.currentState),
    );

    useEffect(() => {
      const onChangeAppState = (nextAppState: string) => {
        const shouldShowSecurityScreen =
          showSecurityScreenFromAppState(nextAppState);
        setShowSecurityScreen(shouldShowSecurityScreen);
      };

      AppState.addEventListener('change', onChangeAppState);

      return () => {
        AppState.removeEventListener('change', onChangeAppState);
      };
    }, []);

    return showSecurityScreen ? <SecurityScreen /> : <Wrapped {...props} />;
  };
};

const withSecurityScreenAndroid = (Wrapped: JSX.IntrinsicAttributes) => Wrapped;

export const withSecurityScreen =
  Platform.OS === 'ios' ? withSecurityScreenIOS : withSecurityScreenAndroid;
