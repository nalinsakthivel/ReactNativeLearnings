/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect} from 'react';
import {SplashScreenProps} from '../screens/SplashScreen';
import LocalStore from '../utils/LocalStore';

export const useSplashScreen = (props: SplashScreenProps) => {
  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    const name = await LocalStore.getAuthToken();

    if (name) {
      props.navigation.navigate('HomeScreen');
    } else {
      props.navigation.navigate('LoginScreen');
    }
  };

  return {
    init,
  };
};
