import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';

const LeaderboardScreen = () => {
  return (
    <ScrollView>
      <View style={styles.Navbar}>
        <Image style={styles.uimage} source={require('../../static/th.jpeg')} />
        <Text style={styles.DefaultText}>2</Text>
        <Text style={styles.DefaultText}>Settings</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.header}>Leaderboard</Text>
        <View style={styles.table}>
          <View style={styles.row}>
            <Text style={[styles.cell, styles.headerCell]}>Rank</Text>
            <Text style={[styles.cell, styles.headerCell]}>Name</Text>
            <Text style={[styles.cell, styles.headerCell]}>calori burnt</Text>
            <Text style={[styles.cell, styles.headerCell]}>Points</Text>
          </View>
          <View style={[styles.row, styles.rowcard,styles.rowcard1]}>
            <Text style={styles.cellro}>1</Text>
            <Text style={styles.cellro}>Ramesh</Text>
            <Text style={styles.cellro}>1000</Text>
            <Text style={styles.cellro}>500</Text>
          </View>
          <View style={[styles.row, styles.rowcard,styles.rowcard2]}>
            <Text style={styles.cellro}>2</Text>
            <Text style={styles.cellro}>suresh</Text>
            <Text style={styles.cellro}>990</Text>
            <Text style={styles.cellro}>455</Text>
          </View>
          <View style={[styles.row, styles.rowcard,styles.rowcard3]}>
            <Text style={styles.cellro}>3</Text>
            <Text style={styles.cellro}>Paresh</Text>
            <Text style={styles.cellro}>950</Text>
            <Text style={styles.cellro}>480</Text>
          </View>
          <View style={[styles.row, styles.rowcard]}>
            <Text style={styles.cellro}>4</Text>
            <Text style={styles.cellro}>Ramesh</Text>
            <Text style={styles.cellro}>1000</Text>
            <Text style={styles.cellro}>500</Text>
          </View>
          <View style={[styles.row, styles.rowcard]}>
            <Text style={styles.cellro}>5</Text>
            <Text style={styles.cellro}>suresh</Text>
            <Text style={styles.cellro}>990</Text>
            <Text style={styles.cellro}>455</Text>
          </View>
          <View style={[styles.row, styles.rowcard]}>
            <Text style={styles.cellro}>6</Text>
            <Text style={styles.cellro}>Paresh</Text>
            <Text style={styles.cellro}>950</Text>
            <Text style={styles.cellro}>480</Text>
          </View>
          <View style={[styles.row, styles.rowcard]}>
            <Text style={styles.cellro}>7</Text>
            <Text style={styles.cellro}>Ramesh</Text>
            <Text style={styles.cellro}>1000</Text>
            <Text style={styles.cellro}>500</Text>
          </View>
          <View style={[styles.row, styles.rowcard]}>
            <Text style={styles.cellro}>8</Text>
            <Text style={styles.cellro}>suresh</Text>
            <Text style={styles.cellro}>990</Text>
            <Text style={styles.cellro}>455</Text>
          </View>
          <View style={[styles.row, styles.rowcard]}>
            <Text style={styles.cellro}>9</Text>
            <Text style={styles.cellro}>Paresh</Text>
            <Text style={styles.cellro}>950</Text>
            <Text style={styles.cellro}>480</Text>
          </View>
          <View style={[styles.row, styles.rowcard]}>
            <Text style={styles.cellro}>10</Text>
            <Text style={styles.cellro}>Ramesh</Text>
            <Text style={styles.cellro}>1000</Text>
            <Text style={styles.cellro}>500</Text>
          </View>
          <View style={[styles.row, styles.rowcard]}>
            <Text style={styles.cellro}>11</Text>
            <Text style={styles.cellro}>suresh</Text>
            <Text style={styles.cellro}>990</Text>
            <Text style={styles.cellro}>455</Text>
          </View>
          <View style={[styles.row, styles.rowcard]}>
            <Text style={styles.cellro}>12</Text>
            <Text style={styles.cellro}>Paresh</Text>
            <Text style={styles.cellro}>950</Text>
            <Text style={styles.cellro}>480</Text>
          </View>
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
    padding: 3,
  },
  rowcard1:{
    backgroundColor: 'gold',

  },
  rowcard2:{
    backgroundColor:'silver'
  },
  rowcard3:{
     backgroundColor:'#bc8f8f'
  },

 Navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'blue',
    padding: 10,
  },
  uimage: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  DefaultText: {
    color: 'black',
    textAlign: 'left',
    fontSize: 20,
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
  rowcard: {
    backgroundColor: 'white',
    padding: 3,
    margin: 3,
    borderWidth: 4,
    borderRadius: 4,
    borderColor: 'blue',

    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cell: {
    flex: 1,
    padding: 8,
    color: 'black',
  },
  cellro: {
    padding: 8,
    color: 'black',
    fontSize: 22,
  },
  headerCell: {
    backgroundColor: '#f2f2f2',
    fontStyle: 'italic',
    fontWeight: '900',
  },
});

export default LeaderboardScreen;
