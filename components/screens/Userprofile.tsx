import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const UserProfile = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.profileImage} source={require('../path/to/profile-image.jpg')} />
      <Text style={styles.userName}>John Doe</Text>
      <Text style={styles.userEmail}>john.doe@example.com</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  userEmail: {
    fontSize: 16,
    color: '#888',
  },
});

export default UserProfile;
