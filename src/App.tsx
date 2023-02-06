import React from 'react';

// import Login from './screens/Login';
import Home from './screens/Home';
import {withSecurityScreen} from './Security';

const App = () => {
  return <Home />;
};

export default withSecurityScreen(App);
