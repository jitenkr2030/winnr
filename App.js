import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './screens/SplashScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegistrationScreen from './screens/RegistrationScreen';
import BettingSlipScreen from './screens/BettingSlipScreen';
import BetHistoryScreen from './screens/BetHistoryScreen';
import DashboardScreen from './screens/DashboardScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen'; // Import Forgot Password screen
import EventDetailsScreen from './screens/EventDetailsScreen'; // Import Event Details screen
import AccountSettingsScreen from './screens/AccountSettingsScreen'; // Import Account Settings screen
import OnboardingScreen1 from './screens/OnboardingScreen1'; // Onboarding Screen 1
import OnboardingScreen2 from './screens/OnboardingScreen2'; // Onboarding Screen 2
import OnboardingScreen3 from './screens/OnboardingScreen3'; // Onboarding Screen 3

// Create the Stack Navigator
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
       <Stack.Screen 
          name="Splash" 
          component={SplashScreen} 
          options={{ headerShown: false }} // Hide the header for Splash Screen
        />
        <Stack.Screen 
          name="Onboarding1" 
          component={OnboardingScreen1} 
          options={{ headerShown: false }} // Hide header for Onboarding Screens
        />
        <Stack.Screen 
          name="Onboarding2" 
          component={OnboardingScreen2} 
          options={{ headerShown: false }} // Hide header for Onboarding Screens
        />
        <Stack.Screen 
          name="Onboarding3" 
          component={OnboardingScreen3} 
          options={{ headerShown: false }} // Hide header for Onboarding Screens
        />
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Winnr Home' }} 
        />
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ title: 'Login' }} 
        />
        <Stack.Screen 
          name="Register" 
          component={RegistrationScreen} 
          options={{ title: 'Register' }} 
        />
        <Stack.Screen 
          name="AccountSettings" 
          component={AccountSettingsScreen} 
          options={{ title: 'Account Settings' }} 
        />
        <Stack.Screen 
          name="BettingSlip" 
          component={BettingSlipScreen} 
          options={{ title: 'Betting Slip' }} 
        />
        <Stack.Screen 
          name="BetHistory" 
          component={BetHistoryScreen} 
          options={{ title: 'Bet History' }} 
        />
        <Stack.Screen 
          name="Dashboard" 
          component={DashboardScreen} 
          options={{ title: 'Dashboard' }} 
        />
        <Stack.Screen 
          name="ForgotPassword" 
          component={ForgotPasswordScreen} 
          options={{ title: 'Forgot Password' }} 
        />
        <Stack.Screen 
          name="EventDetails" 
          component={EventDetailsScreen} 
          options={{ title: 'Event Details' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

