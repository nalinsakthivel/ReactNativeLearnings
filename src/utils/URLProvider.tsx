// import {
//   createContext,
//   PropsWithChildren,
//   useContext,
//   useEffect,
//   useState,
// } from 'react';
// import remoteConfig from '@react-native-firebase/remote-config';
// import LocalStore from './LocalStore';
// import ApiConstant from '../httputils/ApiConstant';

// const URLContext = createContext<string | undefined>(undefined);

// export const useNetInfo = () => {
//   return useContext(URLContext);
// };

// export const URLProvoider: React.FC<PropsWithChildren> = ({children}) => {
//   const [remoteURL, setRemoteURL] = useState<string>();

//   useEffect(() => {
//     //getValue('LIVE_URL');
//     init();
//   }, []);

//   const init = async () => {
//     await remoteConfig().fetch(10); // 10 seconds cache
//     await remoteConfig().fetchAndActivate(); //can read remote data if true
//     const values = remoteConfig().getString('LIVE_URL');
//     const imageURL = remoteConfig().getString('LIVE_IMAGE_URL');
//     if (imageURL) {
//       await LocalStore.setImageURL(imageURL);
//       ApiConstant.imageBaseUrl = imageURL;
//     }
//     await LocalStore.setURL(values);
//     setRemoteURL(values);
//   };

//   return (
//     <URLContext.Provider value={remoteURL}>{children}</URLContext.Provider>
//   );
// };
