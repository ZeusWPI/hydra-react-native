import { NavigationContainer } from '@react-navigation/native';
import AppDrawer from './components/drawer';

import 'react-native-gesture-handler';
import './lib/fontawesome';
import { PaperProvider } from 'react-native-paper';
import { registerRootComponent } from 'expo';

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <AppDrawer />
      </NavigationContainer>
    </PaperProvider>
  );
}

registerRootComponent(App);
