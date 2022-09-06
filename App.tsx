import React, {ReactElement, useEffect} from 'react';

import { Navigation } from './src/navigation';

import SplashScreen from 'react-native-splash-screen'


const App: React.FC = (): ReactElement => {
  
  useEffect(()=>{
    SplashScreen.hide();
  },[]);

  return (
    <Navigation />
  );
};

export default App;
