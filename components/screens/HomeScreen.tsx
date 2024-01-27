import React, { useEffect, useState } from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import StepCounter from '../StepCounter';
import UserWeight from '../UserWeight';
import BurnCalories from '../BurnCalories';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({ isAuthorized, googleUsername }: { isAuthorized: boolean; googleUsername: string }) => {
  const [userId, setUserId] = useState('');

  useEffect(() => {
    // Retrieve user_id from AsyncStorage
    const fetchUserId = async () => {
      try {
        const storedUserId = await AsyncStorage.getItem('user_id');
        if (storedUserId) {
          setUserId(storedUserId);
          console.log('User ID from AsyncStorage:', storedUserId);
        }
      } catch (error) {
        console.error('Error fetching user_id from AsyncStorage:', error);
      }
    };

    fetchUserId();
  }, []);

  return (
    <ScrollView>
      <View style={styles.Navbar}>
        <Image style={styles.uimage} source={require('../../static/th.jpeg')} />
        <Text style={styles.DefaultText}>{userId}</Text>
        <Text style={styles.DefaultText}>Settings</Text>
      </View>
      <View style={styles.part1}>
        <View style={styles.Weeklystat}>
          <Text>yhe</Text>
        </View>
        <View style={styles.rightcontainer}>
        <Text>yhe</Text>
        </View>
      </View>
      <View style={styles.part2}>
        <View style={styles.statscard}>
          <Image
            source={require('../../static/Pedomenter.png')}
            style={styles.cardImage}
          />
          <View style={[styles.cardTextview]}>
            <Text style={[styles.DefaultText, styles.cardtexttt]}>
              Pedometer
            </Text>
            <Text style={[styles.DefaultText, styles.cardtexttt]}><StepCounter isAuthorized={isAuthorized} /></Text>
          </View>
        </View>
        <View style={styles.statscard}>
          <Image
            source={require('../../static/water.png')}
            style={styles.cardImage}
          />
          <View style={[styles.cardTextview]}>
            <Text style={[styles.DefaultText, styles.cardtexttt]}>
              Water Count
            </Text>
            <Text style={[styles.DefaultText, styles.cardtexttt]}><UserWeight isAuthorized={isAuthorized} /></Text>
          </View>
        </View>
        <View style={styles.statscard}>
          <Image
            source={require('../../static/pulserate.png')}
            style={styles.cardImage}
          />
          <View style={[styles.cardTextview]}>
            <Text style={[styles.DefaultText, styles.cardtexttt]}>
              PulseRate
            </Text>
            <Text style={[styles.DefaultText, styles.cardtexttt]}>90per/min</Text>
          </View>
        </View>
        <View style={styles.statscard}>
          <Image
            source={require('../../static/calorie.png')}
            style={styles.cardImage}
          />
          <View style={[styles.cardTextview]}>
            <Text style={[styles.DefaultText, styles.cardtexttt]}>
              Calorimeter
            </Text>
            <Text style={[styles.DefaultText, styles.cardtexttt]}><BurnCalories isAuthorized={isAuthorized} /></Text>
          </View>
        </View>
        <View style={styles.part1}>
        <View style={styles.Weeklystat}>
          <Text style={styles.DefaultText}>Daily Claim</Text>
          <Image source={require('../../static/reward.png')} 
          style={styles.cardImage}
          />
        </View>
        <View style={styles.rightcontainer}>
        <Text style={styles.DefaultText}>Walk to Earn</Text>
        <Text style={styles.DefaultText}>36/5000</Text>
        <Text style={styles.DefaultText}>Steps to earn</Text>
        </View>
      </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  uimage: {
    height: 60,
    width: 60,
    borderRadius: 50,
    objectFit: 'cover',
  },
  DefaultText: {
    color: 'black',
    textAlign: 'left',
    fontSize: 20,
  },
  Navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 5,
  },
  part1: {
    flexDirection: 'row',
    backgroundColor: 'f5f5f5',
    padding: 5,
    gap: 4,
  },
  rightcontainer: {
    flex: 1,
    gap: 4,
    borderColor: '#ed6e1f',
    borderWidth: 4,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems : 'center',
  },
  Weeklystat: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ed6e1f',
    borderWidth: 4,
    borderRadius: 20,
    gap: 10,
  },
  part2: {
    flexDirection: 'column',
    padding: 5,
    backgroundColor: '#f5f5f5',
    gap: 20,
    paddingTop: 18,
    paddingBottom: 18,
  },
  statscard: {
    borderWidth: 6,
    borderColor: '#ed6e1f',
    borderRadius: 20,
    padding: 6,
    height: 150,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardImage: {
    height: 100,
    width: 100,
    objectFit: 'cover',
  },
  cardTextview: {
    flexDirection: 'row',
    marginLeft: 25,
    // gap: 10,
    // alignItems: 'center',
    width: '100%',
    gap: 10,
  },
  cardtexttt: {
    fontSize: 24,
  },
});

export default HomeScreen;
