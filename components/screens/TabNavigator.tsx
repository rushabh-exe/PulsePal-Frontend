
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import LeaderboardScreen from './LeaderboardScreen';
import ChatScreen from './ChatScreen';
import UserList from './Betform';

const Tab = createBottomTabNavigator();

const TabNavigator = ({ isAuthorized }: { isAuthorized: boolean }) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" options={{ headerShown: false }}>
        {() => <HomeScreen isAuthorized={isAuthorized} />}
      </Tab.Screen>
      <Tab.Screen name="Leaderboard" component={LeaderboardScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Chat" component={ChatScreen} options={{ headerShown: false }} />
      {/* <Tab.Screen name="Userlist" component={UserList}/> */}
    </Tab.Navigator>
  );
};

export default TabNavigator;
