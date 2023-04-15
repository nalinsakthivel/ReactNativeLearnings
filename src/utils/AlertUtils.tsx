import {Alert, BackHandler, Linking, Platform} from 'react-native';

import {t} from 'i18next';
interface CreateOneButtonAlertProps {
  title: string;
  msg: string;
}
export const createOneButtonAlert = ({
  title,
  msg,
}: CreateOneButtonAlertProps) => {
  return Alert.alert(title, msg, [
    {
      text: 'OK',
      onPress: () => {
        BackHandler.exitApp();
      },
    },
  ]);
};

interface CreateOneButtonAlertCallbackProps {
  title: string;
  msg: string;
  onClick: () => void;
  positiveButtonTxt?: string;
}
export const createOneButtonAlertCallback = ({
  title,
  msg,
  onClick,
  positiveButtonTxt = t('p_ok').toString(),
}: CreateOneButtonAlertCallbackProps) => {
  return Alert.alert(title, msg, [
    {
      text: positiveButtonTxt,
      onPress: () => {
        onClick();
      },
    },
  ]);
};

interface CreateTwoButtonAlertProps {
  title: string;
  msg: string;
  onClick: () => void;
}
export const createTwoButtonAlert = ({
  title,
  msg,
  onClick,
}: CreateTwoButtonAlertProps) => {
  return Alert.alert(title, msg, [
    {text: t('p_cancel').toString(), onPress: () => console.log('OK Pressed')},
    {text: t('p_ok').toString(), onPress: () => onClick()},
  ]);
};
interface CreateTwoButtonAlertProps {
  title: string;
  msg: string;
  onClick: () => void;
}
export const createTwoButtonAlert2 = ({
  title,
  msg,
  onClick,
}: CreateTwoButtonAlertProps) => {
  return Alert.alert(title, msg, [
    {text: t('p_ok').toString(), onPress: () => onClick()},
  ]);
};
export const alertPremission = (permissionName: string) => {
  Alert.alert(
    'Enable Permission',
    'Please enable the ' + permissionName + ' permission',
    [
      {text: 'Cancel', onPress: () => console.log('Cancel Pressed')},
      {
        text: 'OK',
        onPress: () => {
          Platform.OS === 'android'
            ? Linking.openSettings()
            : Linking.openURL('app-settings:').then(() => {});
        },
      },
    ],
  );
};
