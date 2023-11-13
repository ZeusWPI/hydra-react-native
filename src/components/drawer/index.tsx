import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import { routes } from "./routes";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { StyleSheet, Text, View } from "react-native";
import { Suspense } from "react";
import HydraErrorBoundary from "../ErrorBoundary";
import { ActivityIndicator } from "react-native-paper";
import { DrawerEntry } from "../../types/drawer";

const Drawer = createDrawerNavigator();

const DrawerItemLabel = ({ entry, color }: { entry: DrawerEntry; color: string }) => (
  <View style={styles.drawerLabel}>
    <FontAwesomeIcon color={color} icon={entry.icon} style={styles.drawerLabelIcon} />
    <Text style={{ color }}>{entry.name}</Text>
  </View>
);

const IconedDrawer = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView {...props}>
      {routes.map((r, i) => (
        <DrawerItem
          key={r.name}
          label={p => DrawerItemLabel({ entry: r, ...p })}
          onPress={() => props.navigation.navigate(r.name)}
          focused={i === props.state.index}
          activeBackgroundColor={"rgba(0,122,255,0.12)"}
          activeTintColor={"rgba(0,122,255,0.8)"}
        />
      ))}
    </DrawerContentScrollView>
  );
};

// TODO: all pass the props that Drawer.Screen passes to the element
const SuspendedScreenViewGenerator = (element: () => React.JSX.Element) => () => {
  return (
    <HydraErrorBoundary>
      <Suspense
        fallback={
          <View style={styles.loader}>
            <ActivityIndicator />
          </View>
        }
      >
        {element()}
      </Suspense>
    </HydraErrorBoundary>
  );
};

export default function AppDrawer() {
  return (
    <Drawer.Navigator drawerContent={IconedDrawer}>
      {routes.map(r => (
        <Drawer.Screen key={r.name} name={r.name} component={SuspendedScreenViewGenerator(r.element)} />
      ))}
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  loader: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  drawerLabel: { display: "flex", flexDirection: "row", alignItems: "center" },
  drawerLabelIcon: { marginRight: 10 },
});
