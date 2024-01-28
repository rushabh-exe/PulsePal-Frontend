import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import axios from 'axios';
const apiUrl = 'http://192.168.65.84:9876/users/';

const Navbar = () => {
  const [userId, setUserId] = useState('');
  const [username, setUsername] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        const user = response.data[0];
        setUserId(user.user_id ?? '');
        setUsername(user.name ?? '');
        console.log('User ID from API:', user.user_id);
        console.log('Username from API:', user.name);
      } catch (error) {
        console.error('Error fetching data from API:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <View style={styles.Navbar}>
      <Image style={styles.uimage} source={require('../static/th.jpeg')} />
      <Text>{username}</Text>
      <Image style={styles.uimage} source={require('../static/setting.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default Navbar;
