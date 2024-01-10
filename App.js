import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer, DefaultTheme} from '@react-navigation/native';
import NavigationNeuparcel from './components/NavigationNeuparcel';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#F6F6FB'
  },
};

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <NavigationNeuparcel />
    </NavigationContainer>
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
