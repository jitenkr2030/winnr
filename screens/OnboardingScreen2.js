import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const OnboardingScreen2 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/onboarding2.png')} 
        style={styles.image} 
      />
      <Text style={styles.title}>Bet on the Go!</Text>
      <Text style={styles.description}>
        Place your bets anytime, anywhere with ease.
      </Text>
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('Onboarding3')}
      >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    padding: 20, // Added padding for better spacing
  },
  image: {
    width: '100%',
    height: '50%',
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center', // Centered title for better aesthetics
  },
  description: {
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12, // Increased padding for a larger button
    paddingHorizontal: 24,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center', // Centered button text
  },
});

export default OnboardingScreen2;
