// App.tsx
import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import GoogleFit, {Scopes} from 'react-native-google-fit';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './components/screens/TabNavigator';

const App = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  
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
      } else {
        console.log('Authorization denied: ', authResult.message);
      }
    } catch (error) {
      console.log('Error during authorization: ', error);
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
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity
            onPress={authorizeGoogleFit}
            style={{padding: 10, backgroundColor: 'blue'}}>
            <Text style={{color: 'white'}}>Sign In with Google</Text>
          </TouchableOpacity>
        </View>
      )}
    </NavigationContainer>
  );
};

export default App;
