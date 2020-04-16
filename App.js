import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native'

import AmbienceScreen from './src/pages/AmbienceScreen'
import CameraScreen from './src/pages/CameraScreen'
import HomeScreen from './src/pages/HomeScreen'
import InfoScreen from './src/pages/InfoScreen'
import NewAmbience from './src/pages/NewAmbience'
import NewDevice from './src/pages/NewDevice'
import NewDeviceScenario from './src/pages/NewDeviceScenario'
import NewProject from './src/pages/NewProject'
import ProjectScreen from './src/pages/ProjectScreen'




const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="transparent" translucent barStyle="light-content" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="InfoScreen" component={InfoScreen} />
        <Stack.Screen name="NewProject" component={NewProject} />
        <Stack.Screen name="ProjectScreen" component={ProjectScreen} />
        <Stack.Screen name="NewAmbience" component={NewAmbience} />
        <Stack.Screen name="CameraScreen" component={CameraScreen} />
        <Stack.Screen name="AmbienceScreen" component={AmbienceScreen} />
        <Stack.Screen name="NewDevice" component={NewDevice} />
        <Stack.Screen name="NewDeviceScenario" component={NewDeviceScenario} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
