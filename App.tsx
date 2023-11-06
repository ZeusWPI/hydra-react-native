import { NavigationContainer } from '@react-navigation/native';
import AppDrawer from './app/components/drawer';

import 'react-native-gesture-handler';
import './app/lib/fontawesome';

export default function App() {
  return (
    <NavigationContainer>
      <AppDrawer />
    </NavigationContainer>
  );
}
