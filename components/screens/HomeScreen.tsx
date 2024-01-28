import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import StepCounter from '../StepCounter';
import UserWeight from '../UserWeight';
import BurnCalories from '../BurnCalories';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Navbar from '../Navbar';
import HeartRateMonitor from '../HeartRateMonitor';


axios.get('http://192.168.65.84:9876/users/user_id')
  .then(response => {
    console.log(response.data.user_id);
    console.log(typeof response.data.user_id);
  })
  .catch(error => {
    console.error(error);
  });

const HomeScreen = ({ isAuthorized}:{isAuthorized: boolean;}) => {
  const [userId, setUserId] = useState('');
  const [username, setUsername] = useState('');

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
    const fetchUsername = async () => {
      try {
        const storedUsername = await AsyncStorage.getItem('name');
        if (storedUsername) {
          setUsername(storedUsername);
          console.log('Username from AsyncStorage:', storedUsername);
        }
      } catch (error) {
        console.error('Error fetching username from AsyncStorage:', error);
      }
    };
    fetchUsername();
    fetchUserId();
  }, []);

  
  

  return (
    <ScrollView>
      <Navbar/>
      <View style={styles.part1}>
        <View style={styles.Weeklystat}>
          <Text style={[styles.DefaultText,styles.btnText]}>Update Health</Text>
        </View>
        <View style={styles.rightcontainer}>
          <Text style={styles.DefaultText}>Severe obesity may shorten life expectancy by 5 to 20 years.</Text>
      
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
            <Text style={[styles.DefaultText, styles.cardtexttt]}>2L</Text>
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
            <Text style={[styles.DefaultText, styles.cardtexttt]}><HeartRateMonitor isAuthorized={isAuthorized}/>p/m</Text>
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
        <Text style={styles.DefaultText}><StepCounter isAuthorized={isAuthorized} />/5000</Text>
        <Text style={styles.DefaultText}>Steps to earn</Text>
        <UserWeight isAuthorized={isAuthorized} />
        </View>
      </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({

  DefaultText: {
    color: 'black',
    textAlign: 'left',
    fontSize: 20,
  },
  Navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ED6E1F',
    padding: 10,
  },
  uimage: {
    height: 40,
    width: 40,
    borderRadius: 20,
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
    height: 190
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
  btnText:{
    fontSize: 25,
    backgroundColor: 'orange',
    padding: 10,
    color: 'white',
  }
});

export default HomeScreen;
