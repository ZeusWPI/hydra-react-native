import { NavigationContainer } from '@react-navigation/native';

import 'react-native-gesture-handler';
import AppDrawer from './app/drawer';

export default function App() {
  return (
    <NavigationContainer>
      <AppDrawer />
    </NavigationContainer>
  );
}
