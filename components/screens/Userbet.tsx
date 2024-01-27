import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface UserBetProps {
  name: string;
  email: string;
  points: number;
  onStartBet: () => void; // Function to handle the "Start Bet" button press
}

const UserBet: React.FC<UserBetProps> = ({ name, email, points, onStartBet }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>User Details</Text>
      <Text>Name: {name}</Text>
      <Text>Email: {email}</Text>
      <Text>Points: {points}</Text>
      <TouchableOpacity style={styles.startBetButton} onPress={onStartBet}>
        <Text style={styles.buttonText}>Start Bet</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  startBetButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default UserBet;
