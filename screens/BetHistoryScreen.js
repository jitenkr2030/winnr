import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TextInput, Button } from 'react-native';

export default function BetHistoryScreen() {
  const [filterOutcome, setFilterOutcome] = useState('');
  const [filterDate, setFilterDate] = useState('');

  const betHistory = [
    { id: 1, event: 'Football: Premier League', betType: 'Match Winner', odds: 2.5, stake: 10, potentialPayout: 25, outcome: 'Win', date: '2024-10-01' },
    { id: 2, event: 'Tennis: Wimbledon', betType: 'Set Winner', odds: 1.8, stake: 15, potentialPayout: 27, outcome: 'Lose', date: '2024-09-30' },
    { id: 3, event: 'Basketball: NBA Finals', betType: 'Match Winner', odds: 3.0, stake: 20, potentialPayout: 60, outcome: 'Win', date: '2024-10-02' },
    // Add more bets as needed
  ];

  const filteredBets = betHistory.filter(bet => {
    const outcomeMatch = filterOutcome ? bet.outcome.toLowerCase() === filterOutcome.toLowerCase() : true;
    const dateMatch = filterDate ? bet.date === filterDate : true;
    return outcomeMatch && dateMatch;
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bet History</Text>

      {/* Filters */}
      <TextInput
        style={styles.filterInput}
        placeholder="Filter by Outcome (Win/Lose)"
        value={filterOutcome}
        onChangeText={setFilterOutcome}
      />
      <TextInput
        style={styles.filterInput}
        placeholder="Filter by Date (YYYY-MM-DD)"
        value={filterDate}
        onChangeText={setFilterDate}
      />
      <Button title="Clear Filters" onPress={() => { setFilterOutcome(''); setFilterDate(''); }} />

      <ScrollView style={styles.historyContainer}>
        {filteredBets.map((bet) => (
          <View key={bet.id} style={styles.betCard}>
            <Text style={styles.betEvent}>{bet.event}</Text>
            <Text style={styles.betType}>{bet.betType}</Text>
            <Text style={styles.betDetails}>Odds: {bet.odds}</Text>
            <Text style={styles.betDetails}>Stake: ${bet.stake}</Text>
            <Text style={styles.betDetails}>Potential Payout: ${bet.potentialPayout}</Text>
            <Text style={styles.outcome(bet.outcome)}>{bet.outcome}</Text>
            <Text style={styles.betDate}>Date: {bet.date}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f4f4f4',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  filterInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  historyContainer: {
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
  },
  betEvent: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  betType: {
    fontSize: 16,
    color: '#555',
  },
  betDetails: {
    fontSize: 16,
    color: '#007bff',
  },
  outcome: (status) => ({
    fontSize: 16,
    fontWeight: 'bold',
    color: status === 'Win' ? 'green' : 'red',
  }),
  betDate: {
    fontSize: 14,
    color: '#888',
    marginTop: 5,
  },
});
