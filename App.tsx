/**
 * Urban Quests - Gamified Smart City Platform
 * Root Application Entry Point
 *
 * Architecture:
 * - AuthProvider: Manages user session and auth state
 * - ReportsProvider: Global city reports state
 * - AppNavigator: Handles Auth vs Main navigation routing
 */
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import Ionicons from '@expo/vector-icons/Ionicons';
import { AuthProvider } from './context/AuthContext';
import { ReportsProvider } from './context/ReportsContext';
import AppNavigator from './navigation/AppNavigator';
import { View, ActivityIndicator } from 'react-native';

export default function App() {
  // Preload icon fonts to prevent rendering boxes on web
  const [fontsLoaded] = useFonts({
    ...Ionicons.font,
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, backgroundColor: '#0f172a', alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator color="#6366f1" size="large" />
      </View>
    );
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <AuthProvider>
          <ReportsProvider>
            <StatusBar style="light" backgroundColor="#0f172a" />
            <AppNavigator />
          </ReportsProvider>
        </AuthProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
