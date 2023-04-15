import EncryptedStorage from 'react-native-encrypted-storage';

export default class LocalStore {
  static clear = async (): Promise<void> => {
    await EncryptedStorage.clear();
  };

  static setAuthToken = async (token: string): Promise<void> => {
    await EncryptedStorage.setItem('AUTHTOKEN', token);
  };

  static getAuthToken = async (): Promise<string | null> => {
    return await EncryptedStorage.getItem('AUTHTOKEN');
  };

  static setSelectedLanguage = async (lng: string): Promise<void> => {
    await EncryptedStorage.setItem('SELECTED_LANGUAGE', lng);
  };

  static getSelectedLanguage = async (): Promise<string | null> => {
    return await EncryptedStorage.getItem('SELECTED_LANGUAGE');
  };
}
