import { DarkTheme as NavDarkTheme, DefaultTheme, NavigationContainer } from "@react-navigation/native";
import AppDrawer from "./components/drawer";

import "react-native-gesture-handler";
import "./lib/fontawesome";
import { MD3DarkTheme, MD3LightTheme, PaperProvider, adaptNavigationTheme } from "react-native-paper";
import { registerRootComponent } from "expo";
import { useEffect, useMemo } from "react";
import { AppState, AppStateStatus, Platform } from "react-native";
import { QueryClientProvider, focusManager } from "@tanstack/react-query";
import { queryClient } from "./lib/queryclient";
import { useColorScheme } from "react-native";
import { useMaterial3Theme } from "@pchmn/expo-material3-theme";
import { StatusBar } from "expo-status-bar";

// Refetch on app focus
function onAppStateChange(status: AppStateStatus) {
  if (Platform.OS !== "web") {
    focusManager.setFocused(status === "active");
  }
}

export default function App() {
  const colorScheme = useColorScheme();
  const { theme } = useMaterial3Theme();

  const paperTheme = useMemo(
    () =>
      colorScheme === "dark" ? { ...MD3DarkTheme, colors: theme.dark } : { ...MD3LightTheme, colors: theme.light },
    [colorScheme, theme]
  );

  const { LightTheme, DarkTheme } = adaptNavigationTheme({
    reactNavigationLight: DefaultTheme,
    reactNavigationDark: NavDarkTheme,
  });

  useEffect(() => {
    const subscription = AppState.addEventListener("change", onAppStateChange);

    return () => subscription.remove();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider theme={paperTheme}>
        <NavigationContainer theme={colorScheme === "dark" ? DarkTheme : LightTheme}>
          <AppDrawer />
          <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
        </NavigationContainer>
      </PaperProvider>
    </QueryClientProvider>
  );
}

registerRootComponent(App);
