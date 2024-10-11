import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, TextInput, Alert } from 'react-native';

export default function BettingSlipScreen({ navigation }) {
  const [stake, setStake] = useState('10'); // Default stake amount
  const selectedBets = [
    { id: 1, event: 'Football: Premier League', betType: 'Match Winner', odds: 2.5 },
    { id: 2, event: 'Tennis: Wimbledon', betType: 'Set Winner', odds: 1.8 },
  ];

  const totalOdds = selectedBets.reduce((total, bet) => total * bet.odds, 1);
  const potentialPayout = (totalOdds * parseFloat(stake)).toFixed(2);

  const handlePlaceBet = () => {
    const stakeValue = parseFloat(stake);
    if (isNaN(stakeValue) || stakeValue <= 0) {
      Alert.alert('Invalid Stake', 'Please enter a valid stake amount greater than 0.');
      return;
    }

    // Logic to place the bet (e.g., API call)
    console.log('Bet Placed with stake:', stakeValue);
    Alert.alert('Bet Placed', `Your bet with a stake of $${stakeValue} has been placed!`);
  };

  const increaseStake = () => {
    setStake((prevStake) => (parseFloat(prevStake) + 1).toString());
  };

  const decreaseStake = () => {
    setStake((prevStake) => (Math.max(parseFloat(prevStake) - 1, 0)).toString());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Betting Slip</Text>
      <ScrollView style={styles.betsContainer}>
        {selectedBets.map((bet) => (
          <View key={bet.id} style={styles.betCard}>
            <Text style={styles.betEvent}>{bet.event}</Text>
            <Text style={styles.betType}>{bet.betType}</Text>
            <Text style={styles.betOdds}>Odds: {bet.odds}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.summary}>
        <View style={styles.stakeInputContainer}>
          <TouchableOpacity onPress={decreaseStake} style={styles.changeStakeButton}>
            <Text style={styles.changeStakeText}>-</Text>
          </TouchableOpacity>
          <TextInput
            style={styles.stakeInput}
            value={stake}
            onChangeText={setStake}
            keyboardType="numeric"
            placeholder="Enter stake amount"
          />
          <TouchableOpacity onPress={increaseStake} style={styles.changeStakeButton}>
            <Text style={styles.changeStakeText}>+</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.summaryText}>Total Odds: {totalOdds.toFixed(2)}</Text>
        <Text style={styles.summaryText}>Potential Payout: ${potentialPayout}</Text>
      </View>
      <TouchableOpacity style={styles.placeBetButton} onPress={handlePlaceBet}>
        <Text style={styles.buttonText}>Place Bet</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.historyButton} onPress={() => navigation.navigate('BetHistory')}>
        <Text style={styles.historyButtonText}>View Bet History</Text>
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
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
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
  betEvent: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  betType: {
    fontSize: 16,
    color: '#555',
  },
  betOdds: {
    fontSize: 16,
    color: '#007bff',
  },
  summary: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  summaryText: {
    fontSize: 18,
    color: '#333',
    marginBottom: 5,
  },
  stakeInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  stakeInput: {
    height: 40,
    borderColor: '#007bff',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 16,
    flex: 1,
  },
  changeStakeButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  changeStakeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  placeBetButton: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  historyButton: {
    backgroundColor: '#6c757d',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  historyButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
