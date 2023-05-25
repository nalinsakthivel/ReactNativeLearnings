// import RNFS from 'react-native-fs';
// import RNFetchBlob from 'rn-fetch-blob';
// import {formattedDateforApi, getFormattedImageUri} from './CommonUtils';

// export class FileIOHelper {
//   static async write(image: string, event_type: any, user_id: any, name: any) {
//     try {
//       const folderPath = `${RNFS.DocumentDirectoryPath}/HRR-Images`;
//       const filePath = `${folderPath}/${formattedDateforApi(
//         new Date(),
//       )}-${event_type}-${user_id}-${name}`;

//       // Create the folder
//       await RNFS.mkdir(folderPath);

//       return await RNFS.exists(filePath).then(async exists => {
//         if (exists) {
//           await RNFS.unlink(filePath);
//         }

//         const imageBase64 = await RNFetchBlob.config({
//           fileCache: true,
//         })
//           .fetch('GET', getFormattedImageUri(image))
//           .then(async resp => {
//             return await resp.base64();
//           });

//         await RNFS.writeFile(filePath, imageBase64, 'base64');
//         console.log('filePath:>>>>>', filePath);
//         return 'file:///' + filePath;
//       });
//     } catch (e) {
//       console.log('error:>>> ', e);
//     }
//   }

//   static async writeFiletoLocal(
//     image: string,
//     event_type: any,
//     user_id: any,
//     name: any,
//   ) {
//     const folderPath = `${RNFS.DocumentDirectoryPath}/HRR-Images`;
//     const filePath = `${folderPath}/${formattedDateforApi(
//       new Date(),
//     )}}-${user_id}-${event_type}-${name}`;
//     return await RNFetchBlob.fs.exists(filePath).then(async exists => {
//       console.log('>>>exists>>', exists, filePath);
//       if (exists) {
//         await RNFetchBlob.fs.unlink(filePath);
//       }
//       const imageBase64 = await RNFS.readFile(image, 'base64');
//       const res = await RNFetchBlob.fs.writeFile(
//         filePath,
//         imageBase64,
//         'base64',
//       );
//       return 'file:///' + filePath;
//     });
//   }

//   static async read(path: string) {
//     return await RNFetchBlob.fs.readFile(path, 'base64'); //after save to notify gallry for that
//   }
// }
