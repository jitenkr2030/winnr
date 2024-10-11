import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* App Logo */}
      <Image source={require('../assets/logo.png')} style={styles.logo} />

      {/* Welcome Text */}
      <Text style={styles.welcomeText}>Welcome to Winnr!</Text>
      <Text style={styles.tagline}>Your go-to app for betting on the latest sports and events.</Text>

      {/* Buttons for Login and Registration */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>

      {/* Promo Message */}
      <Text style={styles.promoText}>Bet live, win big, and get exclusive rewards!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 30,
    resizeMode: 'contain',
  },
  welcomeText: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  tagline: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: 30, // Add margin for spacing
  },
  loginButton: {
    backgroundColor: '#1e90ff',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 10, // Adjust spacing
    width: '100%',
    alignItems: 'center',
  },
  registerButton: {
    backgroundColor: '#32cd32',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 10, // Adjust spacing
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  promoText: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
  },
});