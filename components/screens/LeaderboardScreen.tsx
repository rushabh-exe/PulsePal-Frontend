import React from 'react';
import { View, Text, TextInput, Image, StyleSheet, ScrollView } from 'react-native';
import Navbar from '../Navbar';

const App = () => {
  return (
    <ScrollView>
      <Navbar/>
      <View style={styles.container}>
        <View style={styles.search}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            placeholderTextColor="#ccc"
          />
          <Image source={require('../../static/search.png')} style={styles.searchIcon} />
        </View>

        <View style={styles.friendlyBetButton}>
          <Image source={require('../../static/bettingicon.png')} style={styles.buttonImage} />
          <Text style={styles.buttonText}>Friendly challenge</Text>
        </View>

        <View style={styles.globalBetButton}>
          <Image source={require('../../static/globalbet.png')} style={styles.buttonImage} />
          <Text style={styles.buttonText}>Global challenge</Text>
        </View>

        <Text style={styles.header}>Leaderboard</Text>

        <View style={styles.table}>
          <View style={styles.row}>
            <Text style={[styles.cell, styles.headerCell]}>Rank</Text>
            <Text style={[styles.cell, styles.headerCell]}>Name</Text>
            <Text style={[styles.cell, styles.headerCell]}>Calories Burnt</Text>
            <Text style={[styles.cell, styles.headerCell]}>Points</Text>
          </View>

          <View style={[styles.row, styles.rowCard, styles.rowCard1]}>
            <Text style={styles.cellRo}>1</Text>
            <Text style={styles.cellRo}>Hanshal</Text>
            <Text style={styles.cellRo}>1000</Text>
            <Text style={styles.cellRo}>500</Text>
          </View>
          <View style={[styles.row, styles.rowCard, styles.rowCard1]}>
            <Text style={styles.cellRo}>1</Text>
            <Text style={styles.cellRo}>Hanshal</Text>
            <Text style={styles.cellRo}>1000</Text>
            <Text style={styles.cellRo}>500</Text>
          </View>
          <View style={[styles.row, styles.rowCard, styles.rowCard1]}>
            <Text style={styles.cellRo}>1</Text>
            <Text style={styles.cellRo}>Hanshal</Text>
            <Text style={styles.cellRo}>1000</Text>
            <Text style={styles.cellRo}>500</Text>
          </View>

          {/* Add more rows as needed */}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ed6e1f',
    padding: 10,
  },
  userImage: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  defaultText: {
    color: 'black',
    textAlign: 'left',
    fontSize: 20,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
    padding: 3,
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    padding: 8,
    marginRight: 5,
    borderColor: '#ccc',
    borderRadius: 4,
    borderWidth: 1,
  },
  searchIcon: {
    height: 35,
    width: 35,
  },
  friendlyBetButton: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-around',
    margin: 20,
    borderColor: '#ed6e1f',
    borderWidth: 4,
    borderRadius: 20,
  },
  globalBetButton: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-around',
    margin: 20,
    borderColor: '#ed6e1f',
    borderWidth: 4,
    borderRadius: 20,
  },
  buttonImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 18,
    color: 'black',
    fontWeight : '900',
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  table: {
    width: '100%',
    backgroundColor: 'white',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 3,
    margin: 3,
    borderWidth: 4,
    borderRadius: 4,
    borderColor: '#121212',
  },
  rowCard: {
    backgroundColor: 'white',
    padding: 3,
    margin: 3,
    borderWidth: 4,
    borderRadius: 4,
    borderColor: '#e14e0f',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cell: {
    flex: 1,
    padding: 8,
    color: 'black',
  },
  cellRo: {
    padding: 8,
    color: 'black',
    fontSize: 22,
  },
  headerCell: {
    backgroundColor: '#f2f2f2',
    fontStyle: 'italic',
    fontWeight: '900',
  },
  rowCard1: {
    backgroundColor: 'gold',
  },
});

export default App;
