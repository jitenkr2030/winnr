import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const OnboardingScreen3 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/onboarding3.png')} style={styles.image} />
      <Text style={styles.title}>Join the Community!</Text>
      <Text style={styles.description}>
        Connect with other sports fans and share your experiences.
      </Text>
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('Login')} // Navigate to Login screen
      >
        <Text style={styles.buttonText}>Get Started</Text>
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
  },
  description: {
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default OnboardingScreen3;
