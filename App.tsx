import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, TextInput, StyleSheet } from 'react-native';
import axios from 'axios';
import GoogleFit, { Scopes } from 'react-native-google-fit';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './components/screens/TabNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [name, setname] = useState('');
  const [email, setEmail] = useState('');

  const options = {
    scopes: [
      Scopes.FITNESS_ACTIVITY_READ,
      Scopes.FITNESS_ACTIVITY_WRITE,
      Scopes.FITNESS_BODY_READ,
      Scopes.FITNESS_BODY_WRITE,
    ],
  };

  const checkAuthorization = async () => {
    try {
      await GoogleFit.checkIsAuthorized();
      const authorized = GoogleFit.isAuthorized;
      console.log(authorized);
      setIsAuthorized(authorized);
    } catch (error) {
      console.log('Error checking authorization: ', error);
    }
  };

  const authorizeGoogleFit = async () => {
    try {
      const authResult = await GoogleFit.authorize(options);

      if (authResult.success) {
        console.log('Authorization successful');
        setIsAuthorized(true);

        // Send user data to the server
        sendUserDataToServer();
      } else {
        console.log('Authorization denied: ', authResult.message);
      }
    } catch (error) {
      console.log('Error during authorization: ', error);
    }
  };

  const sendUserDataToServer = async () => {
    try {
      const response = await axios.post('http://192.168.65.84:9876/signin', {
        name,
        email,
      });
  
      if (response.status === 200) {
        console.log('Server response:', response.data);

        // Check if user_id is present in the response
        if (response.data.user_id) {
          // Store user id in AsyncStorage
          storeUserIdInAsyncStorage(String(response.data.user_id));
        }

      } else {
        console.error('Unexpected server response:', response);
      }
    } catch (error) {
      console.error('Error sending data to the server:', error);
    }
  };
  
  const storeUserIdInAsyncStorage = async (userId: string) => {
    try {
      await AsyncStorage.setItem('user_id', userId);
      console.log('User ID stored in AsyncStorage:', userId);
    } catch (error) {
      console.error('Error storing user ID in AsyncStorage:', error);
    }
  };
  

  useEffect(() => {
    checkAuthorization();
  }, []);

  return (
    <NavigationContainer>
      {isAuthorized ? (
        <TabNavigator isAuthorized={isAuthorized} />
      ) : (
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Type name"
            placeholderTextColor="#888"
            onChangeText={(text) => setname(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Type Your Email"
            placeholderTextColor="#888"
            onChangeText={(text) => setEmail(text)}
          />
          <TouchableOpacity onPress={authorizeGoogleFit} style={styles.button}>
            <Text style={styles.buttonText}>Sign In with Google</Text>
          </TouchableOpacity>
        </View>
      )}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    marginBottom: 20,
    fontSize: 16,
    color: 'white',
  },
  button: {
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
  },
});

export default App;
