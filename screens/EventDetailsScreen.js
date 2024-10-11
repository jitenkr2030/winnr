import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, ActivityIndicator, Alert } from 'react-native';

export default function EventDetailsScreen({ route, navigation }) {
  const { eventId } = route.params; // Retrieve eventId from navigation parameters

  // Sample data for the event (could be fetched from an API)
  const [eventDetails, setEventDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating data fetching
    const fetchEventDetails = async () => {
      try {
        // Simulated delay to mimic network request
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const fetchedEventDetails = {
          id: eventId,
          name: 'Football: Premier League',
          date: 'October 15, 2024',
          time: '20:00',
          bets: [
            { id: 1, type: 'Match Winner', odds: 2.5 },
            { id: 2, type: 'Both Teams to Score', odds: 1.8 },
            { id: 3, type: 'Total Goals Over/Under', odds: 1.9 },
          ],
        };

        setEventDetails(fetchedEventDetails);
      } catch (error) {
        Alert.alert('Error', 'Failed to load event details.');
      } finally {
        setLoading(false);
      }
    };

    fetchEventDetails();
  }, [eventId]);

  const handleBetPress = (bet) => {
    // Add bet to betting slip (this function needs to be implemented)
    console.log(`Added ${bet.type} to betting slip`);
    Alert.alert('Bet Added', `${bet.type} at odds ${bet.odds} has been added to your betting slip.`);
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007bff" />
      </View>
    );
  }

  if (!eventDetails) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>No event details available.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{eventDetails.name}</Text>
      <Text style={styles.date}>
        {eventDetails.date} at {eventDetails.time}
      </Text>
      <ScrollView style={styles.betsContainer}>
        {eventDetails.bets.map((bet) => (
          <TouchableOpacity
            key={bet.id}
            style={styles.betCard}
            onPress={() => handleBetPress(bet)}
          >
            <Text style={styles.betType}>{bet.type}</Text>
            <Text style={styles.betOdds}>Odds: {bet.odds}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Back to Dashboard</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f4f4f4',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  date: {
    fontSize: 18,
    color: '#555',
    marginBottom: 20,
  },
  betsContainer: {
    marginBottom: 20,
  },
  betCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  betType: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  betOdds: {
    fontSize: 16,
    color: '#007bff',
  },
  backButton: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  errorText: {
    fontSize: 18,
    color: '#ff0000',
    textAlign: 'center',
    marginTop: 20,
  },
});
