import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';

const LeaderboardScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.header}>Leaderboard</Text>
        <View style={styles.table}>
          <View style={styles.row}>
            <Text style={[styles.cell, styles.headerCell]}>Rank</Text>
            <Text style={[styles.cell, styles.headerCell]}>Name</Text>
            <Text style={[styles.cell, styles.headerCell]}>Score</Text>
            <Text style={[styles.cell, styles.headerCell]}>Score</Text>
          </View> 
          {[...Array(40).keys()].map(index => (
            <View key={index} style={[styles.row,styles.rowcard]}>
              <Text style={styles.cell}>1</Text>
              <Text style={styles.cell}>Player 1</Text>
              <Text style={styles.cell}>1000</Text>
              <Text style={styles.cell}>1000</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
    padding: 3
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  table: {
    width: '100%',
    backgroundColor: "white",
  },
  row: {
    flexDirection: 'row',
  },
  rowcard:{
    backgroundColor: "blue",
  },
  cell: {
    flex: 1,
    padding: 8,
    color: 'black',
  },
  headerCell: {
    backgroundColor: '#f2f2f2',
  },
});

export default LeaderboardScreen;
