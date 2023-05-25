import {SettingsScreenProps} from '../screens/SettingsScreen';
import LocalStore from '../utils/LocalStore';

export const useSettingsScreen = (props: SettingsScreenProps) => {
  const onClick = async () => {
    await LocalStore.setAuthToken('');
    props.navigation.navigate('LoginScreen');
  };

  return {
    onClick,
  };
};
