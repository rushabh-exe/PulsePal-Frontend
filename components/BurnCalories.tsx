import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import GoogleFit from 'react-native-google-fit';

const BurnCalories = ({isAuthorized}: {isAuthorized: boolean}) => {
  const [dailyCalories, setDailyCalories] = useState<number | null>(null);

  const fetchDailyCalories = async () => {
    try {
      const today = new Date();
      const options = {
        startDate: new Date(
          today.getFullYear(),
          today.getMonth(),
          today.getDate(),
        ).toISOString(),
        endDate: today.toISOString(),
        bucketUnit: 'DAY',
        bucketInterval: 1,
      };

      const res = await GoogleFit.getDailyCalorieSamples(options);
      console.log('Daily calories:', res[res.length - 1]);

      if (res.length > 0) {
        setDailyCalories(
          Math.round(res[res.length - 1].calorie * -1 * 100) / 100,
        );
      } else {
        console.log('No calorie data found for today.');
      }
    } catch (error) {
      console.log('Error fetching daily calories: ', error);
    }
  };

  useEffect(() => {
    if (isAuthorized) {
      fetchDailyCalories();
      const intervalId = setInterval(fetchDailyCalories, 10000);
      return () => clearInterval(intervalId);
    }
  }, [isAuthorized]);

  return (
    <Text>
      {' '}
      {dailyCalories !== null ? dailyCalories.toFixed(0) + ' cal' : 'N/A'}
    </Text>
  );
};

export default BurnCalories;
