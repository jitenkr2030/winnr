import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function DashboardScreen({ navigation }) {
  const popularEvents = [
    { id: 1, name: 'Football: Premier League', image: require('../assets/football.jpg') },
    { id: 2, name: 'Basketball: NBA Finals', image: require('../assets/basketball.jpg') },
    { id: 3, name: 'Tennis: Wimbledon', image: require('../assets/tennis.jpg') },
  ];

  const sportsCategories = [
    { id: 1, name: 'Football', icon: '⚽' },
    { id: 2, name: 'Basketball', icon: '🏀' },
    { id: 3, name: 'Tennis', icon: '🎾' },
    { id: 4, name: 'Cricket', icon: '🏏' },
    { id: 5, name: 'Baseball', icon: '⚾' },
    { id: 6, name: 'Hockey', icon: '🏒' },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to Winnr</Text>

      {/* Popular Events Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Popular Events</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {popularEvents.map((event) => (
            <TouchableOpacity
              key={event.id}
              style={styles.eventCard}
              onPress={() => navigation.navigate('EventDetails', { eventId: event.id })}
            >
              <Image source={event.image} style={styles.eventImage} />
              <Text style={styles.eventName}>{event.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Sports Categories Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Sports Categories</Text>
        <View style={styles.sportsGrid}>
          {sportsCategories.map((category) => (
            <TouchableOpacity
              key={category.id}
              style={styles.sportCategory}
              onPress={() => navigation.navigate('SportsListing', { sport: category.name })}
            >
              <Text style={styles.sportIcon}>{category.icon}</Text>
              <Text style={styles.sportName}>{category.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Ongoing and Upcoming Matches */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Ongoing & Upcoming Matches</Text>
        <Text style={styles.placeholder}>No matches currently available.</Text>
      </View>

      {/* Betting Slip Navigation */}
      <TouchableOpacity
        style={styles.bettingSlipButton}
        onPress={() => navigation.navigate('BettingSlip')}
      >
        <Text style={styles.buttonText}>Go to Betting Slip</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  welcomeText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#555',
    marginBottom: 10,
  },
  eventCard: {
    marginRight: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2, // Added elevation for Android shadow
    width: 200,
    overflow: 'hidden',
  },
  eventImage: {
    width: '100%',
    height: 120,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  eventName: {
    padding: 10,
    fontSize: 16,
    fontWeight: '600', // Make the event name bolder
    color: '#333',
  },
  sportsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  sportCategory: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2, // Added elevation for Android shadow
  },
  sportIcon: {
    fontSize: 30,
    marginBottom: 10,
  },
  sportName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  placeholder: {
    fontSize: 16,
    color: '#777',
    textAlign: 'center',
    paddingTop: 20,
  },
  bettingSlipButton: {
    marginTop: 20,
    paddingVertical: 15,
    backgroundColor: '#007bff',
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

