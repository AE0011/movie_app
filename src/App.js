import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screenKeys} from './res/TypeKeys';
import HomeScreen from './screens/home/HomeScreen';
import SplashScreen from './screens/splash/SplashScreen';
import SearchScreen from './screens/search/SearchScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={screenKeys.splash}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={screenKeys.splash} component={SplashScreen} />
        <Stack.Screen name={screenKeys.home} component={HomeScreen} />
        <Stack.Screen name={screenKeys.search} component={SearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
