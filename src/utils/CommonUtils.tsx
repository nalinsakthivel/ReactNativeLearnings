/* eslint-disable no-bitwise */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-shadow */
// const jwtDecode = require('jwt-decode');
import moment from 'moment';
import {
  callLocation,
  getLocationPermissionCallback,
} from './CurrentGeolocation';
import {
  Linking,
  PermissionsAndroid,
  ToastAndroid,
  Platform,
  Alert,
  Dimensions,
} from 'react-native';
import {check, PERMISSIONS, RESULTS} from 'react-native-permissions';
import RNFS from 'react-native-fs';
import RNFetchBlob from 'rn-fetch-blob';

export const getCurrentDateTime = () => {
  const d = new Date();
  let text = d;
  return text;
};

export const getCurrentISTDateTime = () => {
  const d = new Date();
  //date shifting for IST timezone (+5 hours and 30 minutes)
  d.setHours(d.getHours() + 5);
  d.setMinutes(d.getMinutes() + 30);
  let text = d;
  return text;
};

export const formattedDate = (date: Date): string => {
  return moment.utc(date).local().format('DD-MMM-yyyy');
};

export const formattedDateYYYY = (date: Date): string => {
  return moment.utc(date).local().format('yyyy');
};

export const formattedDateYYYY_MM_DD = (date: Date): string => {
  return moment.utc(date).local().format('DD-MM-yyyy');
};

export const formattedDateYYYY_MM_DD_HH_MM_A = (date: Date): string => {
  return moment.utc(date).local().format('DD-MMM-yyyy hh:mm a');
};

export const formattedMonthNameDate = (date: Date): string => {
  return moment.utc(date).local().format('DD-MMM-yyyy');
};

export const formattedMonthNameDateTime = (date: Date): string => {
  return date ? moment(date).format('DD-MMM-yyyy (hh:mm a)') : '';
};

// export const formattedTime = (date: Date): string => {
//   const [hourString, minute] = moment(date).format(' (hh:mm a)').split(':');
//   const hour = +hourString % 24;
//   return (hour % 12 || 12) + ':' + minute + (hour < 24 ? 'AM' : 'PM');
// };

export const getTimeDifferenceFromCurrentDate = (date: string): number => {
  var diffMs = Date.parse(date) - Date.parse(new Date());
  var hours = Math.abs(diffMs) / 36e5;
  return hours;
};

export const getNoofMaterialsByMilestone = (mileStone: number): any => {
  let cementBags;
  switch (mileStone) {
    case 3: //Basement
      cementBags = {cement: 25, steel: 0};
      break;
    case 4: //Lintel
      cementBags = {cement: 24, steel: 0};
      break;
    case 5: //Roof laid
      cementBags = {cement: 34, steel: 320};
      break;
    case 6: //Completed
      cementBags = {cement: 21, steel: 0};
      break;
  }
  return cementBags;
};

export const getNumOfdaysBetweenDates = (fDate: Date, sDate: Date): number => {
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const firstDate = new Date(fDate);
  const secondDate = new Date(sDate);

  const diffdays = Math.round(
    Math.abs((firstDate.getTime() - secondDate.getTime()) / oneDay),
  );

  return diffdays;
};

// export const decodeJWT = (token: string): any => {
//   const decodedObj = jwtDecode(token);
//   return decodedObj;
// };

export const openMap = async (item: any) => {
  getLocationPermissionCallback(async (err: string, res: string) => {
    if (!err) {
      await callLocation()
        .then(({latitude, longitude}: any) => {
          // setCurLoc({lat: latitude, lng: longitude});
          var url =
            'https://www.google.com/maps/dir/' +
            latitude +
            ',' +
            longitude +
            '/' +
            item.latitude +
            ',' +
            item.longitude;
          Linking.canOpenURL(url)
            .then(supported => {
              if (!supported) {
                console.log("Can't handle url: " + url);
              } else {
                return Linking.openURL(url);
              }
            })
            .catch(err => console.error('An error occurred', err));
        })
        .catch(error => {
          // callback(error, null);
          // setAlertMes('location, Something went wrong');

          return 0;
        });
    } else {
      //openMap(item);
    }
  });
};

export const saveFileInternalMem = async (image: string) => {
  const filePath = `${RNFS.DownloadDirectoryPath}/${new Date().getTime()}.jpg`;
  try {
    let ImageBase64 = await RNFS.readFile(image, 'base64');
    await RNFetchBlob.fs
      .writeFile(filePath, ImageBase64, 'base64')
      .then(value => {
        return filePath;
      })
      .catch(e => {
        return e;
      });
  } catch (error) {
    console.log(error);
  }
};

export const readFileInternalMem = async (path: string) => {
  await RNFetchBlob.fs
    .readFile(path, 'base64') //after save to notify gallry for that
    .then(value => {
      return value;
    })
    .catch(err => {
      return err;
    });
};

export const requestLocationPermission = async () => {
  try {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'App access to your location ',
          buttonPositive: 'Allow',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the location');
      } else {
        console.log('location permission denied');
      }
    } else {
      const res = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
      if (res === RESULTS.GRANTED) {
        console.log('You can use the location');
      } else {
        console.log('location permission denied');
      }
    }
  } catch (err) {
    console.warn(err);
  }
};

export const requestCameraPermission = async () => {
  try {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Camera Permission',
          message: 'App needs access to your camera ',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
      } else {
        console.log('Camera permission denied');
      }
    } else {
      const res = await check(PERMISSIONS.IOS.CAMERA);
      if (res === RESULTS.GRANTED) {
        console.log('You can use the location');
      } else {
        console.log('location permission denied');
      }
    }
  } catch (err) {
    console.warn(err);
  }
};

export const requestWritePermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        title: 'Save Permission',
        message: 'App needs write access ',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can Save the file');
    } else {
      console.log('Save permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};

export const requestReadPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      {
        title: 'Read Permission',
        message: 'App needs Read access ',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can Read the file');
    } else {
      console.log('Read permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};

export const getDateDiffFromToday = (time: string): number => {
  let diffDays: number = 0;
  if (!(time == null || time === '' || time.length < 11)) {
    //Getting Date from the String using split >>>>23-Feb-2022 (12:58 pm)<<<<<<<
    let date1 = new Date(time.split(' ')[0]);
    let date2 = new Date();
    date2.setHours(0, 0, 0, 0);
    let diffTime = Math.abs(date2.getTime() - date1.getTime());
    diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    //console.log(diffDays + ' days');
  }
  return diffDays;
};

// export const getFormattedImageUri = (imageUri: string): string => {
//   //uri formatter
//   let url = imageUri
//     ? ApiConstant.MEDIA_BASE_URL + imageUri.replace('\\', '/')
//     : '';
//   return url;
// };

export const notifyMessage = (msg: string) => {
  if (Platform.OS === 'android') {
    ToastAndroid.show(msg, ToastAndroid.LONG);
  } else {
    Alert.alert(msg);
  }
};
export const getDaysCountBetweenTwoDates = (startDate: Date, endDate: Date) => {
  let diff = moment(endDate).diff(startDate);
  const numOfDays = moment.duration(diff).asDays();
  let roundvalue = Math.round(numOfDays);

  return roundvalue;
};

export const getNumbersOnly = (value: string): string => {
  return value.replace(/[^0-9]/g, '');
};

const chars =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
export const Base64 = {
  btoa: (input: string = '') => {
    let str = input;
    let output = '';

    for (
      let block = 0, charCode, i = 0, map = chars;
      str.charAt(i | 0) || ((map = '='), i % 1);
      output += map.charAt(63 & (block >> (8 - (i % 1) * 8)))
    ) {
      charCode = str.charCodeAt((i += 3 / 4));

      if (charCode > 0xff) {
        throw new Error(
          "'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.",
        );
      }

      block = (block << 8) | charCode;
    }

    return output;
  },

  atob: (input: string = '') => {
    let str = input.replace(/[=]+$/, '');
    let output = '';

    if (str.length % 4 === 1) {
      throw new Error(
        "'atob' failed: The string to be decoded is not correctly encoded.",
      );
    }
    for (
      let bc = 0, bs = 0, buffer, i = 0;
      (buffer = str.charAt(i++));
      ~buffer && ((bs = bc % 4 ? bs * 64 + buffer : buffer), bc++ % 4)
        ? (output += String.fromCharCode(255 & (bs >> ((-2 * bc) & 6))))
        : 0
    ) {
      buffer = chars.indexOf(buffer);
    }

    return output;
  },
};

export const getResponsive = (
  valuesInPixels: number,
  dimesnsionOfDevice: string | number,
) => {
  const dimension = Dimensions.get('window')[dimesnsionOfDevice];
  const value = valuesInPixels / dimension;
  return dimension * value;
};
