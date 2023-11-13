import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItem, createDrawerNavigator } from '@react-navigation/drawer';
import { routes } from './routes';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { Text, View } from 'react-native';

const Drawer = createDrawerNavigator();

const IconedDrawer = (props: DrawerContentComponentProps) => {

  return (
    <DrawerContentScrollView {...props}>
      {routes.map((r, i) => (
        <DrawerItem key={r.name} label={() => (
          <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
            <FontAwesomeIcon icon={r.icon} style={{ marginRight: 10 }} />
            <Text>
              {r.name}
            </Text>
          </View>
        )} onPress={() => props.navigation.navigate(r.name)}
          focused={i == props.state.index}
          activeBackgroundColor={"rgba(0,122,255,0.12)"}
          activeTintColor={"rgba(0,122,255,0.8)"}
        />
      ))}
    </DrawerContentScrollView>
  )
}

export default function AppDrawer() {
  return (
    <Drawer.Navigator drawerContent={IconedDrawer}>
      {routes.map(r => (
        <Drawer.Screen key={r.name} name={r.name} component={r.element} />
      ))}
    </Drawer.Navigator>
  )
}
