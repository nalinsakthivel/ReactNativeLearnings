import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';
import NetInfo, {NetInfoState} from '@react-native-community/netinfo';

const NetInfoContext = createContext<NetInfoState | undefined>(undefined);

export const useNetInfo = () => {
  return useContext(NetInfoContext);
};

export const NetworkProvoider: React.FC<PropsWithChildren> = ({children}) => {
  const [netInfo, setNetInfo] = useState<NetInfoState>();

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state: any) => {
      setNetInfo(state);
    });
    return () => {
      unsubscribe;
    };
  }, []);

  return (
    <NetInfoContext.Provider value={netInfo}>
      {children}
    </NetInfoContext.Provider>
  );
};
