import 'react-native-gesture-handler';
import React from 'react';
import Router from './routes/Router';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import {withSecurityScreen} from './Security';
import {StatusBar} from 'react-native';
import {colours} from './values/colours';

const App = () => {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <StatusBar barStyle={'dark-content'} backgroundColor={colours.White} />
      <Router />
    </SafeAreaProvider>
  );
};

export default withSecurityScreen(App);
