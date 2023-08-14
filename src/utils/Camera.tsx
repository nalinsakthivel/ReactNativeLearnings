import {ImagePickerResponse, launchCamera} from 'react-native-image-picker';

export const Camera = () => {
  return new Promise<ImagePickerResponse>((resolve, reject) => {
    launchCamera(
      {
        quality: 0.7,
        cameraType: 'back',
        mediaType: 'photo',
        includeBase64: false,
        maxHeight: 320,
        maxWidth: 640,
      },
      response => {
        if (response.assets && response.assets.length > 0) {
          resolve(response);
        } else {
          reject(response.errorMessage);
        }
      },
    );
  });
};
