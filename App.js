import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();

import Bottom from './src/screens/Bottom';

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Bottom"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Bottom" component={Bottom} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
