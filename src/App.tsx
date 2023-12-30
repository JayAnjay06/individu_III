// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

//pages
import Router from './pages/Router'

function App() {
  return (
    <NavigationContainer>
      <Router/>
    </NavigationContainer>
  );
}

export default App;