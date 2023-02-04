import React, {useEffect, useState} from 'react';

import {Image, DeviceEventEmitter} from 'react-native';
// import Login from './screens/Login';
import Home from './screens/Home';

const App = () => {
  const [show, setShow] = useState(false);
  const onFocus = (params: {appHasFocus: any}) => {
    setShow(!params.appHasFocus);
  };
  const subscription = DeviceEventEmitter.addListener('focusChange', onFocus);

  useEffect(() => {
    subscription.remove();
  }, [subscription]);
  if (show) {
    console.log('log', show);
    return (
      <Image
        source={require('../src/values/assets/image/bgImages.png')}
        style={{flex: 1}}
      />
    );
  }
  return <Home />;
};

export default App;
