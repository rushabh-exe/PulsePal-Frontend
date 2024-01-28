import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, TextInput, StyleSheet } from 'react-native';
import axios, { AxiosResponse } from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './components/screens/TabNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GoogleFit, { Scopes } from 'react-native-google-fit';

// Define the response type using generics
interface ServerResponse {
  status: number;
  data: {
    user_id?: string;
    name?: string;
    // Add any other properties you expect in the response
  };
}

const options = {
  scopes: [
    Scopes.FITNESS_ACTIVITY_READ,
    Scopes.FITNESS_ACTIVITY_WRITE,
    Scopes.FITNESS_BODY_READ,
    Scopes.FITNESS_BODY_WRITE,
  ],
};

GoogleFit.authorize(options)
  .then((authResult) => {
    if (authResult.success) {
      console.log('Authorization successful');
    } else {
      console.log('Authorization denied: ', authResult.message);
    }
  })
  .catch((error) => {
    console.log('Error during authorization: ', error);
  });

const App = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const checkAuthorization = async () => {
    try {
      const storedUserId = await AsyncStorage.getItem('user_id');
      if (storedUserId) {
        setIsAuthorized(true);
      }
    } catch (error) {
      console.log('Error checking authorization:', error);
    }
  };

  const sendUserDataToServer = async () => {
    try {
      const response: AxiosResponse<ServerResponse> = await axios.post(
        'http://192.168.65.84:9876/signin',
        {
          name,
          email,
        }
      );

      if (response.status === 200) {
        console.log('Server response:', response.data);

        // Check if user_id is present in the response
        if (response.data.user_id) {
          // Store user_id in AsyncStorage
          storeUserIdInAsyncStorage(response.data.user_id);
          StoreUserNameAsyncStorage(response.data.name);

          // Set isAuthorized to true
          setIsAuthorized(true);
        }
      } else {
        console.error('Unexpected server response:', response);
      }
    } catch (error) {
      console.error('Error sending data to the server:', error.message);
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

  const StoreUserNameAsyncStorage = async (name: string) => {
    try {
      await AsyncStorage.setItem('name', name);
      console.log('User name stored in AsyncStorage:', name);
    } catch (error) {
      console.error('Error storing user name in AsyncStorage:', error);
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
            onChangeText={(text) => setName(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Type Your Email"
            placeholderTextColor="#888"
            onChangeText={(text) => setEmail(text)}
          />
          <TouchableOpacity onPress={sendUserDataToServer} style={styles.button}>
            <Text style={styles.buttonText}>Sign In</Text>
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
    color: 'black',
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
