import {PermissionsAndroid, Platform} from 'react-native';

import Geolocation, {
  GeoCoordinates,
  GeoPosition,
} from 'react-native-geolocation-service';
import {check, PERMISSIONS, RESULTS} from 'react-native-permissions';

import {alertPremission} from './AlertUtils';

export const callLocation = () => {
  return new Promise<GeoCoordinates>((resolve, reject) => {
    Geolocation.getCurrentPosition(
      (position: GeoPosition) => {
        resolve({
          ...position.coords,
        });
      },
      error => {
        alertPremission('Location');
        reject(error);
      },
      {
        enableHighAccuracy: true,
        // timeout: 2000,
        // maximumAge: 3600000
      },
    );
  });
};

export const requestLocationPermission = async () => {
  try {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Access Required',
          message: 'This App needs to Access your location',
          buttonPositive: 'Allow',
        },
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        return await callLocation();
      }
    } else {
      const res = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
      if (res === RESULTS.GRANTED) {
        console.log('You can use the location');
      } else {
        console.log('location permission denied');
      }
    }

    return {
      lat: null,
      lng: null,
    };
  } catch (err) {
    return err;
  }
};

export const getLocationPermissionCallback = async (callback: any) => {
  try {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Access Required',
          message: 'This App needs to Access your location',
          buttonPositive: 'Allow',
        },
      );

      if (granted === 'never_ask_again') {
        alertPremission('Location');
      } else {
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          callback(null, 'GRANTED');
        } else {
          callback(granted, null);
        }
      }
    } else {
      const res = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
      if (res === RESULTS.GRANTED) {
        callback(null, 'GRANTED');
        console.log('You can use the location');
      } else {
        callback(null, null);
        console.log('location permission denied');
      }
    }
  } catch (err) {
    console.log('>>>ERRR>>>>', err);
    return err;
  }
};

export const getCurrentLocation = async () => {
  if (Platform.OS === 'ios') {
    return await callLocation();
  }

  return await requestLocationPermission();
};
