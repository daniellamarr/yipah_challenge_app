import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/routes/Home';
import ViewTransaction from './src/routes/ViewTransaction';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ViewTransaction" component={ViewTransaction} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router;
