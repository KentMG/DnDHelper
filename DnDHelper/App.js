/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

// import React, { Component } from 'react';
// import { Platform, StyleSheet, Text, View } from 'react-native';
// import { Provider as PaperProvider } from 'react-native-paper';
// import { List, Checkbox } from 'react-native-paper';
// import { map } from 'rsvp';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './Components/Home';
import ViewShapesScreen from './Components/ListShapes';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  ViewShapes: {screen: ViewShapesScreen},
});

const App = createAppContainer(MainNavigator);

export default App;