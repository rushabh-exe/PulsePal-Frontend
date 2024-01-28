import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import LeaderboardScreen from './LeaderboardScreen';
import ChatScreen from './ChatScreen';
import { Image } from 'react-native';
import GeminiVision from './GeminiVision';

const Tab = createBottomTabNavigator();

const TabNavigator = ({ isAuthorized }: { isAuthorized: boolean }) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconPath;

          if (route.name === 'Home') {
            iconPath = require('../../static/home.png');
          } else if (route.name === 'Leaderboard') {
            iconPath = require('../../static/leaderboard.png');
          } else if (route.name === 'Chat') {
            iconPath = require('../../static/chats.png');
          }
          return <Image source={iconPath} style={{ width: 35, height: 35, opacity: 1 }} />;
        },
      })}
    >
      <Tab.Screen name="Home" options={{ headerShown: false }}>
        {() => <HomeScreen isAuthorized={isAuthorized} />}
      </Tab.Screen>
      <Tab.Screen
        name="Leaderboard"
        component={LeaderboardScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="GeminiVision"
        component={GeminiVision}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;