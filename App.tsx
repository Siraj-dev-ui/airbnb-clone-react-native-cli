/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Router from './src/navigation/Router';

const Tab = createBottomTabNavigator();

function App(): JSX.Element {
  return (
    <>
      <Router />
    </>
  );
}

export default App;
