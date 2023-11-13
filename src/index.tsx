import { NavigationContainer } from '@react-navigation/native';
import AppDrawer from './components/drawer';

import 'react-native-gesture-handler';
import './lib/fontawesome';
import { PaperProvider } from 'react-native-paper';
import { registerRootComponent } from 'expo';
import { useEffect } from 'react';
import { AppState, AppStateStatus, Platform } from 'react-native';
import { QueryClientProvider, focusManager } from '@tanstack/react-query';
import { queryClient } from './lib/queryclient';

// Refetch on app focus
function onAppStateChange(status: AppStateStatus) {
  if (Platform.OS !== 'web') {
    focusManager.setFocused(status === 'active')
  }
}

export default function App() {
  useEffect(() => {
    const subscription = AppState.addEventListener('change', onAppStateChange)

    return () => subscription.remove()
  }, [])
  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider>
        <NavigationContainer>
          <AppDrawer />
        </NavigationContainer>
      </PaperProvider>
    </QueryClientProvider>
  );
}

registerRootComponent(App);
