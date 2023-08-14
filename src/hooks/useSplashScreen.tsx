/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect} from 'react';
import {SplashScreenProps} from '../screens/SplashScreen';
import LocalStore from '../utils/LocalStore';
import useAuthStore from '../zustand/Store';

export const useSplashScreen = (props: SplashScreenProps) => {
  const {setAccessToken} = useAuthStore();
  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    const name = await LocalStore.getAuthToken();

    if (name) {
      setAccessToken(name);
      props.navigation.navigate('HomeScreen');
    } else {
      props.navigation.navigate('LoginScreen');
    }
  };

  return {
    init,
  };
};
