import React from 'react';
import { AppLoading } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  useFonts,
  Orbitron_400Regular,
  Orbitron_500Medium,
  Orbitron_600SemiBold,
  Orbitron_700Bold,
  Orbitron_800ExtraBold,
} from '@expo-google-fonts/orbitron';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';

import reducers from './store/reducers';

import Home from './components/screens/Home';
import Game from './components/screens/Game';
import Rules from './components/screens/Rules';
import Score from './components/screens/Score';

const Stack = createStackNavigator();

const store = createStore(reducers, compose(applyMiddleware(reduxThunk)));

export default function App() {
  const [fontsLoaded] = useFonts({
    Orbitron_400Regular,
    Orbitron_500Medium,
    Orbitron_600SemiBold,
    Orbitron_700Bold,
    Orbitron_800ExtraBold,
  });

  return fontsLoaded ? (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerTitleStyle: {
              fontFamily: 'Orbitron_600SemiBold',
            },
          }}
        >
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Game" component={Game} />
          <Stack.Screen
            name="Rules"
            component={Rules}
            options={{
              title: 'Les règles du jeu',
            }}
          />
          <Stack.Screen name="Score" component={Score} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  ) : (
    <AppLoading />
  );
}
