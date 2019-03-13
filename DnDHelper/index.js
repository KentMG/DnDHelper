/**
 * @format
 */

import * as React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider as PaperProvider } from 'react-native-paper';
import color from 'color';
import { black, white, pinkA400, grey800 } from './Components/colors';
import fonts from './Components/fonts';
import DarkTheme from './Components/DarkTheme'

const theme = {
  dark: true,
  roundness: 4,
  colors: {
    primary: '#AA002A',
    accent: '#222',
    background: black,
    surface: '#111',
    error: '#B00020',
    text: '#AA002A',
    disabled: color(grey800)
      .alpha(0.3)
      .rgb()
      .string(),
    placeholder: color(pinkA400)
      .alpha(0.54)
      .rgb()
      .string(),
    backdrop: color(black)
      .alpha(0.5)
      .rgb()
      .string(),
    notification: pinkA400,
  },
  fonts,
};


export default function Main() {
    return (
      <PaperProvider theme={theme}>
        <App style={{backgroundColor:'#000000'}}/>
      </PaperProvider>
    );
  }

AppRegistry.registerComponent(appName, () => Main);
