import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer, DefaultTheme} from '@react-navigation/native';
import NavigationNeuparcel from './components/NavigationNeuparcel';

import { ParcelProvider } from './components/parcelContext';
import { AppProvider } from './components/appContext';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#F6F6FB'
  },
};

export default function App() {

  return (
    <AppProvider>  
         <ParcelProvider>
            <NavigationContainer theme={MyTheme}>
              <NavigationNeuparcel />
            </NavigationContainer>
          </ParcelProvider>
    </AppProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
