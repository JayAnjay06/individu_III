import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//page

import HomePage from './HomePage/HomePage';
import SplashPage from './SplashPage/SplashPage';

const Stack = createNativeStackNavigator();

function Router() {
  return (
      <Stack.Navigator 
      initialRouteName='SplashPage'
      screenOptions={{headerShown:false}}>
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="SplashPage" component={SplashPage} />
      </Stack.Navigator>
  );
}

export default Router;