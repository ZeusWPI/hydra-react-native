import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItem, createDrawerNavigator } from '@react-navigation/drawer';
import { routes } from './routes';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { StyleSheet, Text, View } from 'react-native';
import { Suspense } from 'react';
import HydraErrorBoundary from '../ErrorBoundary';
import { ActivityIndicator } from 'react-native-paper';

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

// TODO: all pass the props that Drawer.Screen passes to the element
const SuspendedScreenViewGenerator = (element: () => React.JSX.Element) => () => {
  return (
    <HydraErrorBoundary>
      <Suspense fallback={
        <View style={styles.loader}>
          <ActivityIndicator />
        </View>
      }>
        {element()}
      </Suspense>
    </HydraErrorBoundary>
  )
}

export default function AppDrawer() {
  return (
    <Drawer.Navigator drawerContent={IconedDrawer}>
      {routes.map(r => (
        <Drawer.Screen key={r.name} name={r.name} component={SuspendedScreenViewGenerator(r.element)} />
      ))}
    </Drawer.Navigator>
  )
}

const styles = StyleSheet.create({
  loader: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }
})
