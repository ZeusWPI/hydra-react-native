import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../routes/overview';

const Drawer = createDrawerNavigator();

export default function AppDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name='Overview' component={HomeScreen} />
    </Drawer.Navigator>
  )
}
