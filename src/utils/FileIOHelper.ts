import RNFS from 'react-native-fs';
import RNFetchBlob from 'rn-fetch-blob';

export class FileIOHelper {
  static async write(image: string, name: string) {
    const filePath = `${RNFS.DownloadDirectoryPath}/${
      new Date().getTime() + '-' + name
    }.jpg`;
    const imageBase64 = await RNFS.readFile(image, 'base64');
    await RNFetchBlob.fs.writeFile(filePath, imageBase64, 'base64');

    return filePath;
  }

  static async read(path: string) {
    return await RNFetchBlob.fs.readFile(path, 'base64'); //after save to notify gallry for that
  }
}
