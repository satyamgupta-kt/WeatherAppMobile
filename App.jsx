/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, StyleSheet, useColorScheme, View, Text } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import WeatherDetailsScreen from './src/screens/WeatherDetails/WeatherDetailsScreen';
import FavoritesScreen from './src/screens/Favorites/FavoritesScreen';
import SettingsScreen from './src/screens/Settings/SettingsScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createNativeStackNavigator();

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <AppContent />
      </SafeAreaProvider>
     </Provider>
  );
}

function AppContent() {

  return (
    <View style={styles.container}>
       <NavigationContainer >
          <Stack.Navigator
          screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="WeatherDetails" component={WeatherDetailsScreen} />
            <Stack.Screen name="Favorites" component={FavoritesScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen } />
          </Stack.Navigator>
        </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
});

export default App;
