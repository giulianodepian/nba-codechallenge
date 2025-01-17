import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen, TeamScreen, PlayerScreen} from './screens';

const Stack = createNativeStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="TeamScreen" component={TeamScreen} />
      <Stack.Screen name="PlayerScreen" component={PlayerScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
