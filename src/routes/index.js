import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import Home from '../screens/home';
import details from '../screens/details';

const Stack = createNativeStackNavigator();

const index = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={Home}
        />
        <Stack.Screen name="Details" component={details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default index;
